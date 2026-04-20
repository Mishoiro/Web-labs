import { useContext } from "react";
import { TaskContext, TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

function AppContent() {
  const { theme, setTheme, remainingCount, tasks } = useContext(TaskContext);

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1>Базовий додаток React</h1>
          <p className="subtitle">
            Менеджер завдань на React із Context API та хуками.
          </p>
        </div>

        <button
          className="theme-btn"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Тема: {theme === "light" ? "Світла" : "Темна"}
        </button>
      </header>

      <section className="stats-grid">
        <article className="card">
          <span>Усього завдань</span>
          <strong>{tasks.length}</strong>
        </article>
        <article className="card">
          <span>Залишилось</span>
          <strong>{remainingCount}</strong>
        </article>
      </section>

      <TaskForm placeholder="Введіть нове завдання..." />
      <TaskFilter />
      <TaskList emptyMessage="Завдань за цим фільтром немає." />
    </div>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
}
