import './App.css'
// import Counter from './components/Counter'
// import InputValue from './components/InputValue'
// import Drinks from './components/Drinks'
// import Car from './components/Car'
// import Clock from './components/Clock'
// import User from './components/User'
import SignUp from './components/users/SignUp'
import SignIn from './components/users/SignIn'

function App() {

  return (
    <>
      <div className="app">
        {/* <Counter />
        <InputValue />
        <Car />
        <Drinks />
        <Clock />
        <User /> */}
        <SignUp />
        <SignIn />
      </div>
    </>
  )
}

export default App
