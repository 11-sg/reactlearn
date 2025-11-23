import './App.css'
import { useState } from 'react'


function App() {

  let [count, setcounter] = useState(0)


  // let count = 0

  const addValue = () => {
    // count = count+1
    setcounter(count + 1)
    console.log(count)
  }

  const removeValue = () => {
    count = count - 1
    if (count >= 0)
      setcounter(count)
    else {
      setcounter(0)
      count = 0
    }
  }

  const reset= ()=> {
      setcounter(0)
  }
  return (
    <>
      <h2>Counter value: {count} </h2>
      <button
        onClick={addValue}
      >Add value</button>
      <button
        onClick={removeValue}
      >Remove value</button>
      <br></br>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
