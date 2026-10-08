import { useState, useEffect } from 'react'
import users from '../data/Users';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });



    const [result, setResult] = useState(null);
    const [visible, setVisible] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, password } = formData;

        const matched = users.find((user) =>
            user.username === username && user.password === password
        );

        if (matched) {
            setResult("success");
            navigate('/');
        } else {
            setResult("fail");
        }

        setFormData({ username: "", password: "" });
    }


    useEffect(() => {
        if (result === '') return;

        setVisible(true);

        const fadeTimer = setTimeout(() => {
            setVisible(false);
        }, 1500);

        const removeTimer = setTimeout(() => {
            setResult('');
        }, 2500);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, [result]);


    return (
        <div className="sign-in">
            <h3>로그인</h3>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            placeholder="아이디를 입력하세요"
                        />
                    </li>
                    <li>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="비밀번호를 입력하세요"
                        />
                    </li>
                    <li>
                        <button type="submit">로그인</button>
                    </li>
                </ul>
            </form>
            {/* {result === "success" && (
                <p className={visible ? "message" : "message fade-out"}>
                    환영합니다
                </p>
            )} */}

            {result === "fail" && (
                <p className={visible ? "message" : "message fade-out"}>
                    아이디 또는 비밀번호가 일치하지 않습니다
                </p>
            )}
        </div>
    )
}
export default SignIn