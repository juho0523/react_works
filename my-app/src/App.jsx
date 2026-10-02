// import { useState } from 'react'
import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import Example01 from './components/Example01'
import './App.css'
import Example02 from './components/Example02';
import Example03 from './components/Example03';

//내부컴포넌트 정의 하지만 주로 외부에서 export해서 사용함 ㅇㅇ
function MyButton() {
  return (
    <button>목록보기</button>
  )
}

function App() {
 // const [count, setCount] = useState(0)
 const season = '봄';

  return (
    <div>
      <h1>리액트</h1>
      <h3 className="welcome">홈페이지 방문환영</h3>
      <section>
        <p>현재 계절은 {season}입니다.</p>
        <img src={heroImg} alt="main" width="200" />
        <MyButton />
        <Example01 />
        <Example02 />
        <Example03 />
      </section>
    </div>
  )
}

export default App
