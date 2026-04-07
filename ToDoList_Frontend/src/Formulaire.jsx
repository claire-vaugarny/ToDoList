import React, { useState } from 'react';

function Formulaire({ onUpdateTasks }) {
  const [title, setTitle] = useState('');
  const [todo1, setTodo1] = useState('');
  const [todo2, setTodo2] = useState('');
  const [todo3, setTodo3] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, todo1, todo2, todo3 });
    // Ici, vous pouvez ajouter la logique pour envoyer les données à votre backend ou les traiter
  };

  const handleBlur = () => {
    onUpdateTasks({ title, todo1, todo2, todo3 });
  };

  return (
    <form onSubmit={handleSubmit} className="Formulaire">
      <div>
        <label htmlFor="title">Titre:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleBlur}
        />
      </div>
      <div>
        <label htmlFor="todo1">Todo1:</label>
        <input
          type="text"
          id="todo1"
          value={todo1}
          onChange={(e) => setTodo1(e.target.value)}
          onBlur={handleBlur}
        />
      </div>
      <div>
        <label htmlFor="todo2">Todo2:</label>
        <input
          type="text"
          id="todo2"
          value={todo2}
          onChange={(e) => setTodo2(e.target.value)}
          onBlur={handleBlur}
        />
      </div>
      <div>
        <label htmlFor="todo3">Todo3:</label>
        <input
          type="text"
          id="todo3"
          value={todo3}
          onChange={(e) => setTodo3(e.target.value)}
          onBlur={handleBlur}
        />
      </div>
    </form>
  );
}

export default Formulaire;