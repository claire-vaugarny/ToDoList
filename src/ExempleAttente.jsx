import './ExempleAttente.css';

function ExempleAttente() {
  const dots = Array(4).fill(0);

  return (
    <div className="newtons-cradle">
      {dots.map((_, index) => (
        <div key={index} className="newtons-cradle__dot"></div>
      ))}
    </div>
  );
}

export default ExempleAttente;

