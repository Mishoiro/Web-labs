import { useState, useContext, useRef, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Додати</button>
    </form>
  );
};

export default TaskForm;
