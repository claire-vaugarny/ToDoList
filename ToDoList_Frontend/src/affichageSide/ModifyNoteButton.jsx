import "./ModifyNoteButton.css";

function ModifyNoteButton({ note, onModify }) {
  const modifyNote = async () => {
    // Passe les données de la note au formulaire
    if (onModify && note) onModify(note);
  };

  return (
    <button className="modify-btn" onClick={modifyNote}>
      <span className="modify-btn-text">Modifier</span>
      <span className="modify-btn-icon">
        <svg
          className="icon"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
          <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
      </span>
    </button>
  );
}

export default ModifyNoteButton;