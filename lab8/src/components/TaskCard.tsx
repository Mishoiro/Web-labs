import type { FC } from "react";
import type { Task } from "../types/types";
import { isHighPriorityBug } from "../utils/taskUtils";

interface TaskCardProps {
  task: Task;
}

export const TaskCard: FC<TaskCardProps> = ({ task }) => {
  const hotTask = isHighPriorityBug(task);

  switch (task.type) {
    case "bug":
      return (
        <article className={`task-card bug-card ${hotTask ? "hot-task" : ""}`}>
          <div className="task-card__header">
            <span className="task-type">Звіт про баг</span>
            <span className="task-status">{task.status}</span>
          </div>

          <h3>{task.title}</h3>

          <p>
            Серйозність: <strong>{task.severity}</strong>
          </p>

          {hotTask && (
            <p className="hot-label">Критичний баг — потрібна негайна увага</p>
          )}
        </article>
      );

    case "feature":
      return (
        <article className="task-card feature-card">
          <div className="task-card__header">
            <span className="task-type">Запит на функцію</span>
            <span className="task-status">{task.status}</span>
          </div>

          <h3>{task.title}</h3>

          <p>
            Пріоритет: <strong>{task.priority}</strong>
          </p>

          <p>Очікуваний реліз: {task.expectedRelease ?? "Ще не заплановано"}</p>
        </article>
      );

    default: {
      const exhaustiveCheck: never = task;
      return exhaustiveCheck;
    }
  }
};
