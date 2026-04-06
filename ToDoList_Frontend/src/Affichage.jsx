function Affichage({ tasks }) {
  return (
    <div className="Affichage">
        <h2>Liste des tâches</h2>
        <p>{JSON.stringify(tasks)}</p>
    </div>
    );
}

export default Affichage;