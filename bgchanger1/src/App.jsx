import { useState } from 'react'

import './App.css'
import Bg from './component/bg'

function App() {
  // const [count, setCount] = useState(0)
const [bgcolor, setbg] = useState("black")

  return (
    <>

     <div 
        className='w-screen h-screen duration-200 fixed top-0 left-0' 
        style={{ backgroundColor: bgcolor }}
      ></div>

    <div className='flex justify-center item-center p-1 m-5 mx-10 rounded-xl' style={{backgroundColor:"black"}}>
      <Bg color="violet" setbg={setbg}/>
      <Bg color="Indigo" setbg={setbg}/>
      <Bg color="Blue" setbg={setbg}/>
      <Bg color="Green"setbg={setbg}/>
      <Bg color="Yellow" setbg={setbg}/>
      <Bg color="Orange" setbg={setbg}/>
      <Bg color="Red" setbg={setbg}/>
      </div>
    </>
  )
}

export default App
