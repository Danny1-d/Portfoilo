import React from 'react'
import About from './About'
import Experience from './Specializations'
import Advantage from "./Advantage"
import Contact from './Contact'

const Details = () => {

  return (
    <div className='mt-24'>
      <div className='text-6xl font-roboto text-light flex flex-col items-center'>
        <div>Hello, Connect With <span className='text-green-700'>Daniel</span>,</div>
        <div className='text-2xl mt-2'>A Frontend Developer and A Web3 Developer (Motoko, ICP Blockchain).</div>
      </div>

      
      <div className='text-sm mt-16 font-montserrat italic mx-2 flex justify-center'>I'm your ultimate companion to make a lasting impression in the digital realm.</div>

      <div className='flex justify-center gap-5 mt-28 text-sm font-playFair text-ash animate-slideright'>
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