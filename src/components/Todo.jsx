function Todo({task}) {
    console.log({task});
    return (
        <div className="todo-item">
            <h2>{ task } </h2>
            <button>Delete</button>
        </div>
    )
}

export default Todo;