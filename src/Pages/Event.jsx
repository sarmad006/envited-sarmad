import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Calendar from '../Svgs/Calendar'
import Location from '../Svgs/Location'
import RightArrow from '../Svgs/RightArrow'

const Event = ({}) => {

  const {state}=useLocation();

  useEffect(()=>{
   console.log(state);

  })
  return (
    <div className='bg-[#DDDDDD]/20 min-h-screen'>
    <div className='flex flex-row justify-center items-center 2xl:justify-between 2xl:mx-60 2xl:gap-20'>
    
     <div className='flex flex-col justify-start md:justify-center md:mt-20 2xl:justify-center  2xl:mt-4 mb-8 2xl:mb-40 gap-4 md:gap-8 2xl:gap-12 items-left md:items-left md:mx-20 2xl:items-end'>
     <img className='w-full h-3/5 md:h-11/12 md:w-11/12  2xl:hidden' src="./assets/Events/Birthday cake.png" alt='landingPage'/>
     <div className='ml-4 md:ml-0'>
      <h1 className='font-semibold text-3xl  text-purpleDark md:text-5xl text-left 2xl:text-8xl '>{state.event}</h1>
       <p className='text-text828282 text-left opacity-80 md:text-lg md:my-4 2xl:text-3xl '>Hosted by <strong>{state.host}</strong></p>
       <div className='flex flex-col mt-6 md:mt-12 2xl:mt-20 gap-4 md:gap-8 2xl:gap-12'>
        <div className='flex flex-row  gap-4 md:gap-8 2xl:gap-12'>
        <span className='bg-white rounded-xl p-3 2xl:p-5'>
         <Calendar/>
         </span>
         <p className='md:text-lg 2xl:text-3xl'>
           <strong> {state.startDate} </strong>
         <br></br>
         <span>to <strong>{state.endDate} </strong> UTC +10</span>
         </p>
         <span className='absolute right-8 md:right-40 '>
           <RightArrow/>
         </span>
        </div>
        <div className='flex flex-row  gap-4 md:gap-8 2xl:gap-12'>
        <span className='bg-white rounded-xl p-3 2xl:p-5'>
         <Location/>
         </span>
         <p className='md:text-xl 2xl:text-3xl'>
           <strong> Street name </strong>
         <br></br>
         <span>{state.location}</span>
         </p>
         <span className='absolute right-8 md:right-40'>
           <RightArrow/>
         </span>
        </div>
       </div>
       </div>
     </div>
     <img className='hidden 2xl:block 2xl:mt-60  2xl:w-3/6 2xl:h-1/3' src="./assets/Events/Birthday Cake.png" alt='landingPage'/>
    </div>
    </div>
  )
}

export default Event