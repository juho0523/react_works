import { useState } from 'react'
import TodoList from './TodoList'

const Todo = () => {
    const [inputValue, setInputValue] = useState('')
    const [todoList, setTodoList] = useState([])

    // 입력창
    const handleInputOnChange = (e) => {
        setInputValue(e.target.value)
    }

    // Todo 추가
    const addTodoList = () => {
        if (inputValue.trim() === '') return

        const newTodo = {
            id: Date.now(),
            text: inputValue,
            checked: false
        }

        setTodoList([...todoList, newTodo])
        setInputValue('')
    }

    // 체크
    const handleCheck = (id) => {
        setTodoList(
            todoList.map((todo) =>
                todo.id === id
                    ? { ...todo, checked: !todo.checked }
                    : todo
            )
        )
    }

    // 삭제
    const deleteTodo = (id) => {
        setTodoList(
            todoList.filter((todo) => todo.id !== id)
        )
    }

    return (
        <>
            <div>
                <h2>todo list</h2>

                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputOnChange}
                    placeholder="input todo list"
                />

                <button onClick={addTodoList}>추가</button>
            </div>

            <TodoList
                todoList={todoList}
                handleCheck={handleCheck}
                deleteTodo={deleteTodo}
            />
        </>
    )
}

export default Todo