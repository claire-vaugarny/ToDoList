import React, { useState, useEffect } from "react";
import "./ExempleListe.css";

const ExempleListe = () => {
  const [todos, setTodos] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});

  // Fetch des données depuis public/datas.json
  useEffect(() => {
    fetch("/datas.json")
      .then((response) => {
        if (!response.ok) throw new Error("Erreur lors du fetch des données");
        return response.json();
      })
      .then((data) => {
        const todosData = data.todos || [];
        setTodos(todosData);

        // Initialiser les cases cochées
        const initialChecked = {};
        todosData.forEach((item) => {
          initialChecked[item.id] = item.checked;
        });
        setCheckedItems(initialChecked);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div id="ExempleListe">
      {todos.map((item) => (
        <React.Fragment key={item.id}>
          <input
            type="checkbox"
            id={item.id}
            name="r"
            value={item.id}
            checked={checkedItems[item.id] || false}
            onChange={() => handleChange(item.id)}
          />
          <label htmlFor={item.id}>{item.label}</label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ExempleListe;