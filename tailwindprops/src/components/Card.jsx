import React from 'react'
//rfce
function Card({username="not"}) {
    // console.log(props);
    // console.log(username)
  return (
    <>
    <button
        type="button"
        className="  py-2 px-4  active:scale-105 scale-125 active:transition-all duration-50 font-semibold rounded bg-gray-100 text-gray-800  "
      >
        Basic button by {username}
      </button>
      </>
  )
}

export default Card
