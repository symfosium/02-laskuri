import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = (props) => {
  let [counter, setCounter] = useState(0);

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

    const decreaseByOne = () => { 
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  console.log('rendering with counter value', counter)



  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={increaseByOne} text="plus"/>
      <Button handleClick={decreaseByOne} text="minus"/>
      <Button handleClick={setToZero} text="zero"/>
    </div>
  )
}

export default App
