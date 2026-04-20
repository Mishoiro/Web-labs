import { useContext, useMemo } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList({ emptyMessage = "Список порожній" }) {
  const { tasks, filter } = useContext(TaskContext);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  if (!filteredTasks.length) {
    return <p className="empty-state">{emptyMessage}</p>;
  }

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </div>
  );
}
