import React, { useState } from 'react'

function Bg(props) {

  const [bgcolor, setbg] = useState(null)

  const changebg = () => {
    setbg(props.color)
  }
  return (
    <>
      

      <div className='relative z-10'>
        <div>
          <button onClick={changebg} className='outline-none p-2 m-1 w-20 h-10 rounded-full cursor-pointer' style={{ backgroundColor: props.color }}>{props.color}</button>
        </div>
      </div>

      <div className='w-full h-full fixed top-0 left-0' style={{ backgroundColor: bgcolor }}></div>
    </>
  )
}

export default Bg
