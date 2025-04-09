function Todo({ task, togglePopup }) {
  
  return (
    <div className="todo-item">
      <h2>{task} </h2>
      <button className="popup__btn" onClick={togglePopup}>
        Done
      </button>
    </div>
  );
}

export default Todo;
