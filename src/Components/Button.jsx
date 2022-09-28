import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = () => {
  const navigate=useNavigate();
  return (
    <button
    onClick={()=>navigate('/create')}
     className='bg-gradient-to-r from-envitedPurple to-envitedPink text-white md:py-6 md:px-8  py-3 px-5  font-medium text-md md:text-3xl  md:w-4/5  rounded-xl'>
     🎉 Create my event
    </button>
  )
}

export default Button