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
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg text-orange-500 bg-white'>test</div>
    </>
  )
}

export default App
