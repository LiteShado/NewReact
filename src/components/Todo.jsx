function Todo({ task }) {
  function deleteHandler() {
    console.log("delete", task);
  }
  return (
    <div className="todo-item">
      <h2>{task} </h2>
      <button className="popup__btn" onClick={deleteHandler}>
        Done
      </button>
    </div>
  );
}

export default Todo;
