import Counter from './components/Counter'
import './App.css'
import InputValue from './components/InputValue'
import Drinks from './components/Drinks'
import Car from './components/Car'

function App() {

  return (
    <>
      <div className="app">
        <h1>리액트 상태 관리</h1>
        <Counter />
        <InputValue />
        <Car />
        <Drinks />
      </div>
    </>
  )
}

export default App
