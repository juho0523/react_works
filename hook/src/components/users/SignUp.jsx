import { memo, useState } from 'react'
const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        job: '',
        gender: '',
        memo: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        setFormData({
            name: '',
            job: '',
            gender: '회사원',
            memo: 'male',
        });
    }

    const handleInputChange = (e) => {
        const { name, value  } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <div className="sign-up">
            <h3>회원가입</h3>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>이름</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </li>
                    <li>
                        <label>직업</label>
                        <select
                            name="job"
                            value={formData.job}
                            onChange={handleInputChange}
                        >
                            <option value="employee">회사원</option>
                            <option value="student">학생</option>
                            <option value="freelancer">프리랜서</option>
                        </select>
                    </li>
                    <li>
                        <label>성별</label>
                        <label>
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleInputChange}
                            />
                            남성
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleInputChange}
                            />
                            여성
                        </label>
                    </li>
                    <li>
                        <label>메모</label>
                        <textarea
                            name="memo"
                            rows="5"
                            columns="10"
                            value={formData.memo}
                            onChange={handleInputChange}
                        />
                    </li>
                    <li>
                        <button type="submit">가입</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default SignUp