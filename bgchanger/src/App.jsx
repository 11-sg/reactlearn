
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("black")

  const newLocal = 'outline-none px-4 py-1 rounded-full text-shadow-lg'
  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>

        <div className='fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center p-3 gap-3 shadow-lg bg-white rounded-3xl'>

            <button onClick={() => setcolor("purple")} className={newLocal} style={{ backgroundColor: "purple" }}>purple</button>

            <button onClick={() => setcolor("indigo")} className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "indigo" }}>indigo</button>

            <button onClick={() => setcolor("blue")} className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "blue" }}>blue</button>
            <button onClick={() => setcolor("green")} className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "green" }}>green</button>


            <button onClick={() => setcolor("yellow")} className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "yellow" }}>yellow</button>

            <button onClick={() => setcolor("orange")} className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "orange" }}>orange</button>

            <button onClick={() => setcolor("red")} className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "red" }}>red</button>

            <button onClick={() => setcolor("skyblue")} className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "skyblue" }}>skyblue</button>

            <button onClick={() => setcolor("lavender")} className='outline-none px-4 py-1 rounded-full' style={{ backgroundColor: "lavender" }}>lavender</button>


          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
