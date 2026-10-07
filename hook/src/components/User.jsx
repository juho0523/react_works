import { useState, useEffect } from 'react';
const User = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(1);

    useEffect(() => {
        console.log('렌더링');
        console.log(`이름: ${name}, 나이: ${age}`);
    }, []);

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeAge = (e) => {
        setAge(e.target.value);
    }

    return (
        <div>
            <h3>User</h3>
            <input
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={onChangeName}
            />
            <input
                type="number"
                placeholder="나이를 입력하세요"
                value={age}
                onChange={onChangeAge}
            />
            <p>이름: {name}</p>
            <p>나이: {age}</p>
        </div>
    )
}

export default User