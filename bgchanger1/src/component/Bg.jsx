import React from 'react'

function Bg(props) {

  

  let changebg = () => {
    props.setbg(props.color)
  }
  return (
    <>
     

      <div className='relative z-10'>
        <div>
          <button onClick={changebg} className='outline-none p-2 m-1 w-20 h-10 rounded-full cursor-pointer' style={{ backgroundColor: props.color }}>{props.color}</button>
        </div>
      </div>
    </>
  )
}

export default Bg
