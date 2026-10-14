import axios from "axios"
import { useRef, useState } from "react"

const AxiosPost = () => {
    const [title, setTitle] = useState("")

    const isSubmitting = useRef(false)


    const handleInputChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(title.trim() === ""){
            alert('데이터 입력바람')
            return;
        }

        if(isSubmitting.current) return;

        isSubmitting.current = true;
        
        axios.post("https://jsonplaceholder.typicode.com/todos",{
            title: title,
            completed: false
        })
        .then((response) => {
            

            console.log("추가된 데이터: ", response.data);
            alert("추가 완료")
            setTitle("")
            
        })
        .catch(
            (error) => {
                console.error(error)
            alert("추가 실패")
        })
        .finally(() => {
            isSubmitting.current = false
            
        });
        
    }

    return(
        <div>
            <h2>할 일 추가</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="할 일 입력"
                    value={title}
                    onChange={handleInputChange}
                />
                <button type="submit">추가</button>
            </form>
        </div>
    )
}
export default AxiosPost