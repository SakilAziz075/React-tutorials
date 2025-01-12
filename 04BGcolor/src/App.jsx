import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//NOTE 'OnClick' Always expects a function 


function App() {
  const [color, setColor] = useState("olive")

  return (
  <div className="w-screen h-screen duration-200" style={{backgroundColor: color}} >  

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-full">

        <button onClick={()=>setColor('red')} className='outline-none px-4 px-2 rounded-full' style={{backgroundColor:'red'}}>Red</button>
        <button onClick={()=>setColor('green')} className='outline-none px-4 px-2 rounded-full' style={{backgroundColor:'green'}}>Green</button>
        <button onClick={()=>setColor('blue')} className='outline-none px-4 px-2 rounded-full' style={{backgroundColor:'Blue'}}>Blue</button>
      
      </div>

    </div>

  </div>
  )
}

export default App
