import "./AddNoteButton.css";

function AddNoteButton({ onAdd, onNewNote }) {
  const newNote = async () => {
    try {
      const response = await fetch("http://localhost:3001/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          title: "Titre", 
          todos: [{ id: "1", label: "Tache", checked: false }] 
        }),
      });

      if (response.ok) {
        const newNoteData = await response.json();
        
        // Envoie les données de la nouvelle note au formulaire
        if (onNewNote) onNewNote(newNoteData);
      }

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