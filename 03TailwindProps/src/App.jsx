import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObject={ 
    UserName: 'Sakil Aziz',
    password: 1234,
    age: 22
  }

  let newArray= [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

      <Card firstName= "sakil" someObj={myObject} myArray={newArray}/>
      <Card firstName="Nepalian" btnText='click me'/>
    </>
  )
}

export default App
