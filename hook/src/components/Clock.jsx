import { useState, useEffect } from 'react';
const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        console.log('타이머 시작');
        return () => {
            console.log('타이머 종료');
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <h3>Clock</h3>
            <h1>{time}</h1>
        </div>
    )
}
export default Clock;