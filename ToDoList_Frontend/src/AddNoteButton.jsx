import "./AddNoteButton.css";

function AddNoteButton({ onClick }) {
  return (
    <button className="add-btn" onClick={onClick}>
      <span className="add-btn-text">Add Item</span>

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