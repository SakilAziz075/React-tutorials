import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllower] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")


  //useRef Hook
  const passwordRef = useRef(null)


  //UseCallBack hook : used for memoization 

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+-=[]{}|;:,.<>?~ "
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])



const copyPasswordToClipboard = useCallback( ()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,100)

  //used to copy and paste to clipboard
  window.navigator.clipboard.writeText(Password)
})



useEffect(() => { PasswordGenerator() }, [length, numberAllowed, charAllowed, PasswordGenerator])


  return (
    <>
      <div className='w-screen max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-800'>

        <h1 className='text-white text-center'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 my-4'>

          <input
            type="text"
            value={Password}
            className='outline-none w-full py-3 px-3 my-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-500 text-white px-5 py-0.5 shrink-0 mx-2'>
            copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={() => { setLength(event.target.value) }}
            />

            <label>Length: {length}</label>
          </div>



          <div className='flex items-center gap-x-1' >
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllower((previous) => !previous) //reverse the previous value
              }}
            />
            <label>Num Lage?</label>
          </div>

          <div>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((previous) => !previous) //reverse the previous value
              }}
            />
            <label>Special Char Lage?</label>
          </div>


        </div>


      </div>
    </>
  )
}

export default App
