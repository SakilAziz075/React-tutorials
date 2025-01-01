import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //THIS IS USE TO SET THE DEFAULT VALUE OF THE COUNTER , THESE ARE REACT HOOKS

  let [counter, setCounter] = useState(0)


  const addValue = () => {
    if (counter < 20)
    {
      counter++;
      setCounter(counter)
    }
  }

  const decValue = () => {

    if (counter > 0)
      {
        counter--;
        setCounter(counter)
      }

  }


  return (
    <>
      <h1>Sakil </h1>
      <h2>Counter Value: {counter} </h2>

      <button onClick={addValue}>Add Value : {counter}</button>
      <br />
      <button onClick={decValue}>Decrease Value : {counter} </button>

      <p>Counter: {counter}</p>
    </>
  )
}

export default App
