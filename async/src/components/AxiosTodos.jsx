import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
const AxiosTodos = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                setData(response.data)
                console.log(response.data);
                
            })
            .catch((error) => console.error(error))
    }, [])

    return(
        <div>
            <h2>할일 데이터</h2>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>
                        <Link to={`/axios/${todo.id}`}>{todo.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default AxiosTodos