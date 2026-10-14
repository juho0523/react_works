import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FetchAll = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(result => {
                setData(result);
                console.log(result);
                
            })
            .catch(error => console.error(error));
    }, []);

    // fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then((result) => {
    //         setData(result);
    //         console.log(result);
            
    //     })
    //     .catch((error) => console.error(error));

    return (
        <div>
            <h2>Fetch 사용</h2>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>
                        <Link to={`/${todo.id}`}>{todo.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchAll;