import { useState, useCallback, useEffect } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [num, setnum] = useState(false)
  const [chars, setchars] = useState(false)
  const [password, setpassword] = useState("")

  const passwordgen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) {
      str += "0123456789"
    }
    if (chars)
      str += "!@#$%^&*()_+<>:;"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)

  }, [length, num, chars])

  useEffect(() => { passwordgen() }, [length, num, chars, passwordgen])

  return (
    <>
      <div className='flex-col justify-center items-center w-full max-w-md mx-auto shadow-md rounded-lg p-5 m-10 text-orange-500  bg-black '>

        <div className='flex justify-center items-center text-2xl p-2 text-white'>
          <p>Password Generator</p></div>
        <br></br>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 text-orange-700'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readonly></input>
          <button className='bg-blue-700 text-white p-2'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}>
            </input>

            <label>Length: {length}</label>

          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={setchars} id="numberInput" onChange={() => {
              setchars((prev) => !prev);
            }}>

            </input>
            <label>Characters</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={setnum} id="numberInput" onChange={() => {
              setnum((prev) => !prev);
            }}>

            </input>
            <label>Numbers</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
