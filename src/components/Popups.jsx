function Popups({ greeting, description, cancel, toggleCancel }) {
  return (
    <>
      <div className="popup">
        <span>{greeting}</span>
        <div className="popup__btns">
          <button
            className="popup__btn"
            onClick={(event) => {
              console.log("confirm clicked");
            }}
          >
            {description}
          </button>
          <button
            className="popup__btn popup__btn--cancel"
            onClick={toggleCancel}
          >
            {cancel}
          </button>
        </div>
      </div>
      <div className="backdrop"></div>
    </>
  );
}

export default Popups;
