import "./DeleteNoteButton.css";

function DeleteNoteButton({ noteId }) {
  const deleteNote = async () => {
    try {
      const response = await fetch(`http://localhost:3001/notes/${noteId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression");
      }

      // Recharge la page entière après suppression
        window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className="delete-btn" onClick={deleteNote}>
      <span className="delete-btn-text">Supprimer</span>
      <span className="delete-btn-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </span>
    </button>
  );
}

export default DeleteNoteButton;