import { useState, useEffect } from "react";
import "./Affichage.css";
import Note from "./Note";
import AddNoteButton from "./AddNoteButton";

function Affichage({ onModifyNote }) {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:3001/notes");
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="Affichage">
      <h2>Liste des tâches</h2>
      {notes.length === 0 ? (
        <p>Aucune note disponible</p>
      ) : (
        notes.map((note) => <Note key={note.id} note={note} onModifyNote={onModifyNote} />)
      )}

      {/* Passe fetchNotes pour recharger après création */}
      <AddNoteButton onAdd={fetchNotes} />
    </div>
  );
}

export default Affichage;