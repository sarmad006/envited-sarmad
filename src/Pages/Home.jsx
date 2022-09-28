import React from 'react'
import Button from '../Components/Button'

const Home = () => {
  return (
    <div className='bg-[#DDDDDD]/20 min-h-screen'>
    <div className='flex flex-row justify-center items-center 2xl:justify-between 2xl:mx-60 2xl:gap-40 '>
    <img className='hidden 2xl:block 2xl:mt-20 2xl:ml-80 2xl:w-1/3 2xl:h-1/3' src="./assets/home/Landing page image.svg" alt='landingPage'/>
     <div className='flex flex-col justify-center 2xl:justify-end mt-20 2xl:mt-80 mb-8 2xl:mb-20 gap-6 md:gap-8 2xl:gap-12 items-center 2xl:items-end'>
      <h1 className='tracking-tight font-semibold text-4xl  text-purpleDark md:text-7xl  text-center 2xl:text-end '>Imagine if<br></br>
        <span className='bg-gradient-to-r from-envitedPurple to-envitedPink text-transparent  bg-clip-text'>Snapchat</span>
        <br></br>
       had events.</h1>
       <p className='text-text4f4f4f text-center  opacity-80 md:text-3xl 2xl:text-end  '>Easily host and share events with your friends <br></br> across any social media.</p>
      <img className='w-3/5 h-3/5 md:h-11/12 md:w-11/12  2xl:hidden' src="./assets/home/Landing page image.svg" alt='landingPage'/>
      <Button/>
     </div>
  
    </div>
    </div>
  )
}

export default Home