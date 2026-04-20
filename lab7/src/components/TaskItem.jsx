import { memo, useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskItem({ id, title, completed = false }) {
  const { toggleTask, deleteTask, editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(title);

  const handleSave = () => {
    editTask(id, draft);
    setIsEditing(false);
  };

  return (
    <article className={`task-item  ${completed ? "done" : ""}`}>
      <label className="task-main">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTask(id)}
        />

        {isEditing ? (
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="edit-input"
          />
        ) : (
          <span>{title}</span>
        )}
      </label>

      <div className="task-actions">
        {isEditing ? (
          <button onClick={handleSave}>Зберегти</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Редагувати</button>
        )}
        <button onClick={() => deleteTask(id)}>Видалити</button>
      </div>
    </article>
  );
}

export default memo(TaskItem);
