import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import Main from './layouts/Main'
import Header from './layouts/Header'
import ProductList from './pages/ProductList'
import ProductInfo from './pages/ProductInfo'
import AddProduct from './pages/AddProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>

      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<ProductList />} />
            <Route path='/products/:id' element={<ProductInfo />} />
            <Route path='/add-product' element={<AddProduct />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
