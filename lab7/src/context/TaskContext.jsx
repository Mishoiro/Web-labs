import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export const TaskContext = createContext(null);

const initialTasks = [
  {
    id: crypto.randomUUID(),
    title: "Підготувати JSX-компоненти",
    completed: false,
  },
  { id: crypto.randomUUID(), title: "Додати Context API", completed: true },
];

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : initialTasks;
  });

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Tasks updated:", tasks);
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  const addTask = useCallback((title) => {
    const trimmed = title.trim();
    if (!trimmed) return;

    setTasks((prev) => [
      { id: crypto.randomUUID(), title: trimmed, completed: false },
      ...prev,
    ]);
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }, []);

  const editTask = useCallback((id, newTitle) => {
    const trimmed = newTitle.trim();
    if (!trimmed) return;

    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, title: trimmed } : task)),
    );
  }, []);

  const remainingCount = useMemo(
    () => tasks.filter((task) => !task.completed).length,
    [tasks],
  );

  const value = useMemo(
    () => ({
      tasks,
      theme,
      filter,
      setFilter,
      setTheme,
      addTask,
      deleteTask,
      toggleTask,
      editTask,
      remainingCount,
    }),
    [
      tasks,
      theme,
      filter,
      addTask,
      deleteTask,
      toggleTask,
      editTask,
      remainingCount,
    ],
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
