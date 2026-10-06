import { useState } from "react"; 
 
const Car = () => { 
    const [car, setCar] = useState({ 
        brand: "Ford", 
        model: "Mustang", 
        year: "1964", 
        color: "red" 
    }); 

    const [newYear, setNewYear] = useState("");

    const handleInputChange = (e) => { 
        setNewYear(e.target.value);
    }

    const handleButtonClick = () => {
        setCar({ ...car, year: newYear });
    }
 
    return ( 
        <div> 
            <h3>Car</h3> 
            <p>브랜드 : {car.brand}</p> 
            <p>모델 : {car.model}</p> 
            <p>연식 : {car.year}</p> 
            <p>색상 : {car.color}</p> 

            <input  
                type="text" 
                placeholder="연식을 입력하세요" 
                value={newYear}
                onChange={handleInputChange} 
            />

            <button onClick={handleButtonClick}>변경</button>
        </div> 
    ) 
} 

export default Car;