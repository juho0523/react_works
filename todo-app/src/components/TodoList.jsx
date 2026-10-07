const TodoList = ({ todoList, handleCheck, deleteTodo }) => {

    return (
        <div>
            {todoList.map((todo) => (
                <div key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.checked}
                        onChange={() => handleCheck(todo.id)}
                    />

                    <span
                        style={{
                            textDecoration: todo.checked
                                ? 'line-through'
                                : 'none'
                        }}
                    >
                        {todo.text}
                    </span>

                    <button onClick={() => deleteTodo(todo.id)}>
                        삭제
                    </button>
                </div>
            ))}
        </div>
    )
}

export default TodoList