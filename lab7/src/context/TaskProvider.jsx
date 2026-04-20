import { useState, useEffect } from "react";
import { TaskContext } from "./TaskContext";

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const editTask = (id, newText) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t)),
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        toggleTask,
        editTask,
        filter,
        setFilter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
