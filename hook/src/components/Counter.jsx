import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <h1>카운터</h1>
            <h3>현재 Count: {count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;