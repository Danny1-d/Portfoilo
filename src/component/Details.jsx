import React from 'react'
import About from './About'
import Experience from './Specializations'
import Advantage from "./Advantage"
import Contact from './Contact'

const Details = () => {

  return (
    <div id='/' className='mt-44 flex flex-col items-center '>
      <div className='text-6xl font-montserrat text-light h-[50vh] mx-3'>
        <div>Hello, Connect With <span className='text-green-700 font-Quicksand'>Daniel</span>,</div>
        <div className='text-2xl mt-3'>A Frontend Developer and A Web3 Developer (Motoko, ICP Blockchain).</div>
      </div>

      <div className='font-Imperial text-xl'>I'm your ultimate companion to make a lasting impression in digital realm.</div>

      <About />
      <Experience />
      <Advantage />
      <Contact />
    </div>
  )
}

export default Details