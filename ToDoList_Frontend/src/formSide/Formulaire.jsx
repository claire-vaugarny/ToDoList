import React, { useState, useEffect } from 'react';
import './Formulaire.css';
import AddToDoButton from './AddTodoButton';

function Formulaire({ noteData, onUpdateTasks }) {
  // noteData = { id, title, todos: [{id, label}, ...] }
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);

  // Initialisation avec les données reçues
  useEffect(() => {
    if (noteData) {
      setTitle(noteData.title || '');
      setTodos(noteData.todos || []);
    }
  }, [noteData]);

  const handleBlur = () => {
    // On renvoie la structure complète
    onUpdateTasks({ id: noteData?.id, title, todos });
  };

  const handleTodoChange = (index, value) => {
    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], label: value };
    setTodos(newTodos);
  };

  const addTodoInput = () => {
    setTodos([...todos, { id: `c${todos.length + 1}`, label: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, todos });
  };

  return (
    <form onSubmit={handleSubmit} className="Formulaire">
      {/* Input du titre */}
      <div className="inputBox title-input">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleBlur}
        />
      </div>

      {/* Inputs pour chaque todo */}
      {todos.map((todo, index) => (
        <div className="inputBox" key={todo.id}>
          <input
            type="text"
            value={todo.label}
            onChange={(e) => handleTodoChange(index, e.target.value)}
            onBlur={handleBlur}
          />
        </div>
      ))}

      {/* Bouton pour ajouter un todo */}
      <AddToDoButton onClick={addTodoInput} />

      <button type="submit">Valider</button>
    </form>
  );
}

export default Formulaire;