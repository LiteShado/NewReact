function Todo({task, description}) {

    function handleClick() {
        console.log("clicked"); 
    }
    return (
        <div className="todo-item">
            <h2>{ task } </h2>
            <h2>{ description } </h2>
            <button onClick={() => 
                
                    handleClick()
                
            }>Delete</button>
        </div> 
    )
}

export default Todo; 