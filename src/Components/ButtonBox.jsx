import React from 'react'

const ButtonBox = ({colorRandom , handleClick}) => {
  return (
    <button style={{backgroundColor:colorRandom}} className='box__btn' onClick={handleClick}> &#62; </button>
  )
}

export default ButtonBox
