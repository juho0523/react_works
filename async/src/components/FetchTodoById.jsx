import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'
const FetchTodoById = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response) => response.json())
            .then((result) => {
                setData(result)
                console.log(result);
                
            })
            .catch((error) => console.error(error))
    }, [id])

    return(
        <div>
            <h2>할일 데이터</h2>
            {data ? (
                <div>
                    <p>
                        <strong>제목: </strong>
                        {data.title}
                    </p>
                    <p>
                        <strong>완료 여부: </strong>
                        {data.completed ? "완료" : "미완료"}
                    </p>
                </div>
            ) : (
                <p>불러오는 중...</p>
            )}
        </div>
    )
}
export default FetchTodoById