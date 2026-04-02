import './ExempleCheckBox.css';

function ExempleCheckBox() {
  return (
    <div className="checkbox-container">
      <label className="ios-checkbox blue">
        <input type="checkbox" />
        <div className="checkbox-wrapper">
          <div className="checkbox-bg"></div>
          <svg fill="none" viewBox="0 0 24 24" className="checkbox-icon">
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="currentColor"
              d="M4 12L10 18L20 6"
              className="check-path"
            ></path>
          </svg>
        </div>
      </label>

      <label className="ios-checkbox green">
        <input type="checkbox" />
        <div className="checkbox-wrapper">
          <div className="checkbox-bg"></div>
          <svg fill="none" viewBox="0 0 24 24" className="checkbox-icon">
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="currentColor"
              d="M4 12L10 18L20 6"
              className="check-path"
            ></path>
          </svg>
        </div>
      </label>

      <label className="ios-checkbox purple">
        <input type="checkbox" />
        <div className="checkbox-wrapper">
          <div className="checkbox-bg"></div>
          <svg fill="none" viewBox="0 0 24 24" className="checkbox-icon">
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="currentColor"
              d="M4 12L10 18L20 6"
              className="check-path"
            ></path>
          </svg>
        </div>
      </label>

      <label className="ios-checkbox red">
        <input type="checkbox" />
        <div className="checkbox-wrapper">
          <div className="checkbox-bg"></div>
          <svg fill="none" viewBox="0 0 24 24" className="checkbox-icon">
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              stroke="currentColor"
              d="M4 12L10 18L20 6"
              className="check-path"
            ></path>
          </svg>
        </div>
      </label>
    </div>
  );
}

export default ExempleCheckBox;