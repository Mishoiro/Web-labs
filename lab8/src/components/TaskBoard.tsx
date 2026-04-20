import { useMemo, useState, type ChangeEvent, type FC } from "react";
import { List } from "./List";
import { TaskCard } from "./TaskCard";
import { TaskForm } from "./TaskForm";
import type { Task, TaskDraft } from "../types/types";
import { filterTasks } from "../utils/taskUtils";

const initialTasks: Task[] = [
  {
    id: 1,
    type: "bug",
    title: "Збій під час повторної спроби входу",
    status: "in-progress",
    severity: "critical",
  },
  {
    id: 2,
    type: "feature",
    title: "Додати доріжки Kanban",
    status: "todo",
    priority: 4,
    expectedRelease: "2026 Q2",
  },
  {
    id: 3,
    type: "bug",
    title: "Завантаження аватара не працює на мобільному",
    status: "todo",
    severity: "high",
  },
  {
    id: 4,
    type: "feature",
    title: "Майстер інтеграції зі Slack",
    status: "done",
    priority: 5,
  },
];

export const TaskBoard: FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [query, setQuery] = useState("");

  const visibleTasks = useMemo(() => filterTasks(tasks, query), [tasks, query]);

  const handleAddTask = (draft: TaskDraft) => {
    setTasks((currentTasks) => [
      {
        id:
          currentTasks.length === 0
            ? 1
            : Math.max(...currentTasks.map((task) => task.id)) + 1,
        ...draft,
      },
      ...currentTasks,
    ]);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <main className="dashboard-shell">
      <section className="hero-panel">
        <h1>Панель керування задачами</h1>
        <p>
          Типобезпечні React-компоненти використовують discriminated unions,
          generics, type guards і суворі контракти подій, щоб зберігати стан
          валідним.
        </p>
      </section>

      <section className="board-grid">
        <div className="panel">
          <h2>Додати задачу</h2>
          <TaskForm onAddTask={handleAddTask} />
        </div>

        <div className="panel panel-wide">
          <div className="toolbar">
            <div>
              <h2>Задачі</h2>
              <p>{visibleTasks.length} видимих задач</p>
            </div>

            <label className="search-field">
              Пошук за назвою
              <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Пошук задач..."
              />
            </label>
          </div>

          <List
            items={visibleTasks}
            emptyMessage="Жодна задача не відповідає поточному пошуку."
            renderItem={(task) => <TaskCard task={task} />}
          />
        </div>
      </section>
    </main>
  );
};
