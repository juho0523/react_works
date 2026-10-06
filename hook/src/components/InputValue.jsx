import { useState } from 'react'

const InputValue = () => {
    const [text, setText] = useState('');
    const handleInputChange = (e) => {
        setText(e.target.value);
        console.log(text);
    }
  return (
    <div>
        <h3>InputValue</h3>
        <input 
            type="text" 
            placeholder='글자를 입력하세요' 
            onChange={handleInputChange}
        />
        <p>입력한 글자 : {text}</p>
    </div>
    )
}
export default InputValue;