import './App.css'
import { useState } from 'react'


function App() {

  let [count , setcounter] = useState(0)

  // let count = 0

  const addValue = () => {
    count = count+1
    setcounter(count)
    console.log(count)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {count} </h2>
      <button
        onClick={addValue}
        >Add value</button>
      <button>Remove value</button>
    </>
  )
}

export default App
