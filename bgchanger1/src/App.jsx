// import { useState } from 'react'

import './App.css'
import Bg from './component/bg'

function App() {
  // const [count, setCount] = useState(0)
let colors={
  color: "black"
}

  return (
    <>
    <div className='flex justify-center item-center p-1 m-5 mx-10 rounded-xl' style={{backgroundColor:"black"}}>
      <Bg color="pink"/>
      <Bg color="Indigo"/>
      <Bg color="Blue"/>
      <Bg color="Green"/>
      <Bg color="Yellow"/>
      <Bg color="Orange"/>
      <Bg color="Red"/>
      </div>
    </>
  )
}

export default App
