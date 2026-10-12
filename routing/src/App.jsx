import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'

import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Header from './layout/Header'
import Board from './pages/Board'
import BoardList from './pages/BoardList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='app'>
        <BrowserRouter>
          <Header />

          <div className='content'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path="/board" element={<BoardList />} />
              <Route path="/board/:id" element={<Board />} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
