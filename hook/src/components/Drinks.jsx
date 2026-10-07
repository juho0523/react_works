// useState<-리액에서 객체 상태관리를 위함
import { useState } from 'react';
import DrinkList from './DrinkList';

const Drinks = () => {
    const [drink, setDrink] = useState('');
    const [drinks, setDrinks] = useState([]);

    const handleInputChange = (e) => {
        setDrink(e.target.value);
    }

    const addDrinks = () => {
        const newDrink = drink;

        if (newDrink.trim() === '') return;

        setDrinks([...drinks, newDrink]);
        setDrink('');
    }

    return (
        <div>
            <h3>Drinks</h3>

            <input 
                type="text" 
                placeholder="음료를 입력하세요" 
                value={drink}
                onChange={handleInputChange}
            />

            <button onClick={addDrinks}>추가</button>

            <DrinkList drinks={drinks} />
        </div>
    )
}

export default Drinks;