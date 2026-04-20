export type TaskStatus = "todo" | "in-progress" | "done";
export type BugSeverity = "low" | "high" | "critical";

export interface BaseTask {
  id: number;
  title: string;
  status: TaskStatus;
}

export interface Bug extends BaseTask {
  type: "bug";
  severity: BugSeverity;
}

export interface Feature extends BaseTask {
  type: "feature";
  priority: number;
  expectedRelease?: string;
}

export type Task = Bug | Feature;
export type TaskDraft = Omit<Bug, "id"> | Omit<Feature, "id">;
