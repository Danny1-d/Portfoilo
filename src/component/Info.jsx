import React from 'react'
import gmail from "../assets/images/gmail.png"
import github from "../assets/images/github.png"
import linked from "../assets/images/linked.png"
import x from "../assets/images/x.png"
import whatapp from "../assets/images/whatapp.jpeg"
import location from "../assets/images/location.png"
import { motion } from 'framer-motion'

const Info = () => {
  return (
    <div className='overflow-hidden'>
    <div id='/contact' className='mt-20'>
      <motion.div className='font-bold font-roboto text-3xl mx-5 text-light'
      whileInView={{ opacity: 1, x:0}} 
      initial={{ opacity : 0, x:'50vw'}} 
      transition={{duration: 1}}
      > Let's <span className='text-green-700'>Collaborate</span> to Achieve Great Results.</motion.div>

      <div className='grid grid-cols-1 sm:grid-cols-2 mx-10 mt-20 gap-5'>

        <a href="https://www.linkedin.com/in/daniel-obijuru-aa05062b1/" className='flex justify-between items-center border rounded-xl px-2 py-2 hover:bg-light'>
          <img className='w-10 rounded-xl' src={linked} />
          <img className='w-5 h-5 rounded-xl' src={location} />
        </a>

        
        <a href='https://x.com/DannyKfty?t=87KlVhxXtLT6A01xazamrQ&s=09' className='flex justify-between items-center border rounded-xl px-2 py-2 hover:bg-light'>
          <img className='w-10 rounded-xl' src={x} />
          <img className='w-5 h-5 rounded-xl' src={location} />
        </a>

        <a href="https://wa.me/+2347077377379" className='flex justify-between items-center border rounded-xl px-2 py-2 hover:bg-light'>
          <img className='w-10 rounded-xl' src={whatapp} />
          <img className='w-5 h-5 rounded-xl' src={location} />
        </a>

        
        <a href='mailto:danielobijuru01@gmail.com' className='flex justify-between items-center border rounded-xl px-2 py-2 hover:bg-light'>
          <img className='w-10 rounded-xl' src={gmail} />
          <img className='w-5 h-5 rounded-xl' src={location} />
        </a>

      </div>
    </div>
    </div>
  )
}

export default Info