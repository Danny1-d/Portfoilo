import React from 'react'
import motoko from "../assets/motoko-icon.jpeg"
import js from "../assets/js-icon.png"
import react from "../assets/react-icon.webp"

const Advantage = () => {
  return (
    <div className='mt-20'>
      <div className='ml-10 text-3xl font-bold font-Tangerine'>MY <span className='text-green-600'>Advantage</span></div>

      <div className='grid-cols-3 grid  mt-24'>
        <div className='flex items-center gap-16'>

        <div className='flex flex-col items-center'> 
          <div className='border p-16 rounded-full flex flex-col items-center hover:border-green-500'>
            <img src={js} alt='js icon' className='rounded-xl'/>
            <div className='mt-10 font-bold text-xl text-green-700'>85%</div>
          </div>
          <div className='mt-7 text-light text-xl font-bold font-Tangerine'>JavaScript</div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='border p-16 rounded-full flex flex-col items-center hover:border-green-500'>
            <img src={react} alt='js icon' className='rounded-xl'/>
            <div className='mt-10 font-bold text-xl text-green-700'>75%</div>
          </div>
          <div className='mt-7 text-light text-xl font-bold font-Tangerine'>React</div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='border p-16 rounded-full flex flex-col items-center hover:border-green-500'>
            <img src={motoko} alt='js icon' className='rounded-xl'/>
            <div className='mt-10 font-bold text-xl text-green-700'>70%</div>
          </div>
          <div className='mt-7 text-light text-xl font-bold font-Tangerine'>Motoko</div>
        </div>

                  
        </div>

      </div>

    </div>
  )
}

export default Advantage