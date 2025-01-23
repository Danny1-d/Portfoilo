import React from 'react'
import About from './About'
import Experience from './Specializations'
import Advantage from "./Advantage"
import Contact from './Contact'

const Details = () => {

  return (
    <div className='mt-36 flex flex-col justify-center items-center '>
      <div className='text-6xl font-roboto text-light mx-10 md:mx-0'>
        <div>Hello, Connect With <span className='text-green-700'>Daniel</span>,</div>
        <div className='text-2xl mt-2'>A Frontend Developer and A Web3 Developer (Motoko, ICP Blockchain).</div>
      </div>

      
      <div className='text-sm mt-16 font-montserrat italic'>I'm your ultimate companion to make a lasting impression in the digital realm.</div>

      <div className='flex gap-7 mt-32 text-sm font-playFair text-ash animate-slideright'>
        <div>
          <div className='mb-3'>EMAIL</div>
          <div> danielobijuru01@gmail.com </div>
        </div>

        <div>
          <div className='mb-3'>PHONE</div>
          <div> +2349156761196 </div>
        </div>

        <div>
          <div className='mb-3'>Location</div>
          <div> Anambra, Nigeria </div>
        </div>
      </div>

      <About />
      <Experience />
      <Advantage />
      <Contact />
    </div>
  )
}

export default Details