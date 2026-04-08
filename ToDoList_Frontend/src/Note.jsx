import "./Note.css";
import DeleteNoteButton from "./DeleteNoteButton";
import AddToDoButton from "./AddTodoButton";
import ModifyNoteButton from "./ModifyNoteButton";

function Note({ note }) {
  return (
    <div className="card">
      <div className="card-details">
        <ModifyNoteButton note={note} />
        <DeleteNoteButton noteId={note.id} />
        
        <p className="text-title">{note.title}</p>

        {note.todos.map((todo) => (
          <p className="text-body" key={todo.id}>
            {todo.label}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Note;