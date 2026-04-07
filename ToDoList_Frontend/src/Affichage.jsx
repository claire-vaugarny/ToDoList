import { useState, useEffect } from 'react';

function Affichage({ tasks }) {
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await fetch('http://localhost:3001/notes/note1');
        const data = await response.json();
        setNote(data);
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    };

    fetchNote();
  }, []);

  return (
    <div className="Affichage">
        <h2>Liste des tâches</h2>
        <p>{JSON.stringify(tasks)}</p>
        <p>{JSON.stringify(note)}</p>
    </div>
    );
}

export default Affichage;