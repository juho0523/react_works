import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"
const AxiosTodoById = () => {
    const {id} = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
                
            })
            .catch((error) => console.error(error))
    }, [id])
    
    return(
        <div className="axios-todo-by-id">
            <h2>할일 데이터</h2>
            {data ? (
                <div>
                    <p>
                        <strong>제목 : </strong>
                        {data.title}
                    </p>
                    <p>
                        <strong>완료 여부 : </strong>
                        {data.completed ? "완료" : "미완료"}
                    </p>
                </div>    
            ) : (
                <p>불러오는 중</p>
            )}
        </div>
    )
}

export default AxiosTodoById