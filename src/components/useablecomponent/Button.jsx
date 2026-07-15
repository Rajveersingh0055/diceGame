import React from 'react'

function Button(props) {
  return (
    <button className="bg-[#000000] hover:bg-black-800 text-white font-bold mt-2.5 mb-4 mr-4 ml-2.5 py-2 px-4 rounded w-[220px] h-[44px] cursor-pointer" onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
