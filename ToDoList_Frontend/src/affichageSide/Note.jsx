import { useState, useEffect } from "react";
import { FiCheck, FiMinus } from "react-icons/fi";
import "./Note.css";
import DeleteNoteButton from "./DeleteNoteButton";
import ModifyNoteButton from "./ModifyNoteButton";

function Note({ note }) {
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const initialChecked = {};
    note.todos.forEach(todo => {
      initialChecked[todo.id] = todo.checked || false;
    });
    setCheckedItems(initialChecked);
  }, [note]);

  const handleChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="card">
      <div className="card-details">
        <p className="text-title">{note.title}</p>

        <div className="todo-list">
          {note.todos.map((todo) => (
<div
  className={`todo-item ${checkedItems[todo.id] ? "checked" : ""}`}
  key={todo.id}
  onClick={() => handleChange(todo.id)}
>
  <div className="icon-box">
    {checkedItems[todo.id] ? <FiCheck className="check-animate" size={16} /> : <FiMinus size={16} />}
  </div>
  <label>{todo.label}</label>
</div>
          ))}
        </div>

        <div className="btn-container">
          <ModifyNoteButton note={note} />
          <DeleteNoteButton noteId={note.id} />
        </div>
      </div>
    </div>
  );
}

export default Note;