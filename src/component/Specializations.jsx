import React from 'react'
import { motion } from 'framer-motion'

const Specializations = () => {
  return (
    <div className='overflow-hidden'>
    <div id='/service' className='mt-52'>
      <motion.div className='ml-8 mb-10 text-xl font-bold'
      whileInView={{ opacity: 1, x:0}} 
      initial={{ opacity : 0, x:'-20vw'}} 
      transition={{duration: 2}}
      >My <span className='text-green-800 ml-2'> Discipline </span></motion.div>

      <div className='border p-16 mr-2 rounded-xl hover:border-green-600'>
        <div className='mb-5 text-xl'> <span className='text-green-500'>Front-End</span> Developement</div>
        <div>I transform ideas into intuitive, responsive, and visually compelling digital experience using skill like <span className='text-green-600'>REACT</span> to make a lasting impression in the digital realm.</div>
      </div>

      <div className='border p-16 mr-2 rounded-xl hover:border-green-600 mt-5'>
        <div className='mb-5 text-xl'> <span className='text-green-500'>Web3</span> Developement</div>
        <div> Blending digital intuitive designs with blockchain technology to build decentralized, user-friendly applications using tools with potentials like <span className='text-green-600'>MOTOKO and REACT</span> that empowers users to interact with next generation of internet.</div>
      </div>
    </div>
    </div>
  )
}

export default Specializations;