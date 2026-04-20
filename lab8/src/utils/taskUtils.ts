import type { Bug, Task } from "../types/types";

export const filterTasks = (tasks: Task[], query: string): Task[] => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return tasks;
  }

  return tasks.filter((task) =>
    task.title.toLowerCase().includes(normalizedQuery),
  );
};

export const isHighPriorityBug = (task: Task): task is Bug => {
  return task.type === "bug" && task.severity === "critical";
};
