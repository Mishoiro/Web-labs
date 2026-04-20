import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const filters = [
  { label: "Всі", value: "all" },
  { label: "Активні", value: "active" },
  { label: "Виконані", value: "completed" },
];

export default function TaskFilter() {
  const { filter, setFilter } = useContext(TaskContext);

  return (
    <div className="filters">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          className={filter === value ? "active" : ""}
          onClick={() => setFilter(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
