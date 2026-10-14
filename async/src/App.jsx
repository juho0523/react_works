import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import FetchAll from './components/FetchAll'
import FetchTodoById from './components/FetchTodoById'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AxiosTodos from './components/AxiosTodos'
import AxiosTodoById from './components/AxiosTodoById'
import AxiosPost from './components/AxiosPost'

function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<FetchAll />} />
          <Route path='/:id' element={<FetchTodoById />} />

          <Route path='/axios' element={<AxiosTodos />} />
          <Route path='/axios/:id' element={<AxiosTodoById />} />
          <Route path='/axios-post' element={<AxiosPost />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
