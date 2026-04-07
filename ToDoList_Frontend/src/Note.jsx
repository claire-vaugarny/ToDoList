import "./Note.css";
import DeleteNoteButton from "./DeleteNoteButton";

function Note({ note }) {
  return (
    <div className="card">
      <div className="card-details">
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