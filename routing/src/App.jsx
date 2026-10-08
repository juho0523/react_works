import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'

import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='app'>
        <BrowserRouter>
          <div className='header'>
            <Link to="/">Home</Link>
            <Link to="/signup">회원가입</Link>
            <Link to="/signin">로그인</Link>

          </div>

          <div className='content'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/signin' element={<SignIn />} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
