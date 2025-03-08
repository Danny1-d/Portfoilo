import React from 'react'
import motoko from "../assets/images/motoko-icon.jpeg"
import js from "../assets/images/js-icon.png"
import react from "../assets/images/react-icon.webp"
import { motion } from 'framer-motion'

const Advantage = () => {
  return (
    <div className='overflow-hidden'>
    <div id='/advantage' className='mt-28'>
      <motion.div className='ml-10 text-xl font-bold'
      whileInView={{ opacity: 1, x:0}} 
      initial={{ opacity : 0, x:'50vw'}} 
      transition={{duration: 2}}
      >MY <span className='text-green-600'>Advantage</span></motion.div>

      <div className='grid grid-cols-2 sm:grid-cols-3 mt-20 sm:gap-4 gap-2'>

        <div className='flex flex-col items-center'> 
          <div className='border px-16 py-10 rounded-full flex flex-col items-center hover:border-green-500'>
            <img src={js} alt='js icon' className='w-16 rounded-xl '/>
            <div className='mt-10 font-bold text-xl text-green-700'>85%</div>
          </div>
          <div className='mt-7 text-light text-xl font-bold'>JavaScript</div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='border px-16 py-10 rounded-full flex flex-col items-center hover:border-green-500 w-44'>
            <img src={react} alt='js icon' className='rounded-xl'/>
            <div className='mt-10 font-bold text-xl text-green-700'>75%</div>
          </div>
          <div className='mt-7 text-light text-xl font-bold'>React</div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='border px-16 py-10  rounded-full flex flex-col items-center hover:border-green-500 w-44'>
            <img src={motoko} alt='js icon' className='rounded-xl'/>
            <div className='mt-10 font-bold text-xl text-green-700'>70%</div>
          </div>
          <div className='mt-7 text-light text-xl font-bold'>Motoko</div>
        </div>

      </div>

    </div>
    </div>
  )
}

export default Advantage