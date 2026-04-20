import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FC,
  type FormEvent,
} from "react";
import type { BugSeverity, TaskDraft, TaskStatus } from "../types/types";

interface TaskFormProps {
  onAddTask: (task: TaskDraft) => void;
}

const initialStatus: TaskStatus = "todo";
const initialSeverity: BugSeverity = "low";

export const TaskForm: FC<TaskFormProps> = ({ onAddTask }) => {
  const [taskType, setTaskType] = useState<"bug" | "feature">("bug");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<TaskStatus>(initialStatus);
  const [severity, setSeverity] = useState<BugSeverity>(initialSeverity);
  const [priority, setPriority] = useState<number>(1);
  const [expectedRelease, setExpectedRelease] = useState("");
  const titleInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    titleInputRef.current?.focus();
  }, [taskType]);

  const handleTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskType(event.target.value === "bug" ? "bug" : "feature");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      return;
    }

    if (taskType === "bug") {
      onAddTask({
        type: "bug",
        title: trimmedTitle,
        status,
        severity,
      });
    } else {
      onAddTask({
        type: "feature",
        title: trimmedTitle,
        status,
        priority,
        expectedRelease: expectedRelease.trim() || undefined,
      });
    }

    setTitle("");
    setStatus(initialStatus);
    setSeverity(initialSeverity);
    setPriority(1);
    setExpectedRelease("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="toggle-group" role="radiogroup" aria-label="Тип задачі">
        <label>
          <input
            type="radio"
            name="taskType"
            value="bug"
            checked={taskType === "bug"}
            onChange={handleTypeChange}
          />
          Баг
        </label>

        <label>
          <input
            type="radio"
            name="taskType"
            value="feature"
            checked={taskType === "feature"}
            onChange={handleTypeChange}
          />
          Функція
        </label>
      </div>

      <label>
        Назва
        <input
          ref={titleInputRef}
          type="text"
          value={title}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
          placeholder="Опишіть задачу"
        />
      </label>

      <label>
        Статус
        <select
          value={status}
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            setStatus(event.target.value as TaskStatus)
          }
        >
          <option value="todo">До виконання</option>
          <option value="in-progress">У процесі</option>
          <option value="done">Виконано</option>
        </select>
      </label>

      {taskType === "bug" ? (
        <label>
          Серйозність
          <select
            value={severity}
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              setSeverity(event.target.value as BugSeverity)
            }
          >
            <option value="low">Низька</option>
            <option value="high">Висока</option>
            <option value="critical">Критична</option>
          </select>
        </label>
      ) : (
        <>
          <label>
            Пріоритет
            <input
              type="number"
              min={1}
              max={5}
              value={priority}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPriority(Number(event.target.value) || 1)
              }
            />
          </label>

          <label>
            Очікуваний реліз
            <input
              type="text"
              value={expectedRelease}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setExpectedRelease(event.target.value)
              }
              placeholder="наприклад, 2026 Q3"
            />
          </label>
        </>
      )}

      <button type="submit">Додати задачу</button>
    </form>
  );
};
