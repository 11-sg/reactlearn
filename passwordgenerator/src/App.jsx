import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [length,setlength] = useState(8)
  const [num , setnum] = useState(false)
  const [chars,setchars]=useState(false)
  const [password,setpassword] = useState("")
  const passwordgen = useCallback(() => {
    let pass = ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num)
    {
      str+="0123456789"
    }
    if(chars)
      str+="!@#$%^&*()_+<>:;"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random()*str.length +1)
      pass = str.charAt(char)
    }

    setpassword(pass)

  }, [length,num,chars,setpassword])


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-2 px-10 text-orange-500 bg-white'>Password Generator

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type ="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readonly></input>

      </div>
     </div>
    </>
  )
}

export default App
