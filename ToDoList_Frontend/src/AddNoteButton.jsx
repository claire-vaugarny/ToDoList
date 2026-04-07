import "./AddNoteButton.css";

function AddNoteButton({ onAdd }) {
  const newNote = async () => {
    try {
      await fetch("http://localhost:3001/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "", todos: [] }),
      });

      // Appelle la fonction parent pour recharger les notes
      if (onAdd) onAdd();
    } catch (error) {
      console.error("Erreur création note :", error);
    }
  };

  return (
    <button className="add-btn" onClick={newNote}>
      <span className="add-btn-text">Nouvelle note</span>
      <span className="add-btn-icon">
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
          <line x1="12" x2="12" y1="5" y2="19" />
          <line x1="5" x2="19" y1="12" y2="12" />
        </svg>
      </span>
    </button>
  );
}

export default AddNoteButton;