import { useState, useEffect } from "react";
import { FiCheck, FiMinus } from "react-icons/fi";
import "./Note.css";
import DeleteNoteButton from "./DeleteNoteButton";
import ModifyNoteButton from "./ModifyNoteButton";

function Note({ note, onModifyNote }) {
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const initialChecked = {};
    note.todos.forEach((todo) => {
      initialChecked[todo.id] = todo.checked || false;
    });
    setCheckedItems(initialChecked);
  }, [note]);

const handleChange = (id) => {
  const newCheckedState = !checkedItems[id];

  // 1️⃣ Mise à jour immédiate de l'UI
  setCheckedItems((prev) => ({
    ...prev,
    [id]: newCheckedState,
  }));

  // 2️⃣ Mise à jour serveur en arrière-plan
  (async () => {
    try {
      const updatedTodos = note.todos.map((todo) =>
        todo.id === id ? { ...todo, checked: newCheckedState } : todo
      );

      const response = await fetch(`http://localhost:3001/notes/${note.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...note, todos: updatedTodos }),
      });

      if (!response.ok) {
        throw new Error(`Erreur serveur: ${response.status}`);
      }
    } catch (error) {
      console.error("Erreur mise à jour todo :", error);

      // 3️⃣ Revert si erreur
      setCheckedItems((prev) => ({
        ...prev,
        [id]: !newCheckedState,
      }));
    }
  })();
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
                {checkedItems[todo.id] ? (
                  <FiCheck className="check-animate" size={16} />
                ) : (
                  <FiMinus size={16} />
                )}
              </div>
              <label>{todo.label}</label>
            </div>
          ))}
        </div>

        <div className="btn-container">
          <ModifyNoteButton note={note} onModify={onModifyNote} />
          <DeleteNoteButton noteId={note.id} />
        </div>
      </div>
    </div>
  );
}

export default Note;
