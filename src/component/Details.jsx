import React, { useRef } from 'react'
import About from './About'
import Experience from './Specializations'
import Advantage from "./Advantage"
// import Contact from './Contact'
import Projects from './Projects'
import Info from './Info'
import { motion } from "framer-motion"

const Details = () => {

  return (
    <div id='/' className='overflow-hidden mt-44 flex flex-col'>
     <motion.div
    whileInView={{ opacity: 1, x:0}} 
    initial={{ opacity : 0, x:'50vw'}} 
    transition={{duration: 1}}>
      <div className='xl:animate-slideright animate-slideup'>
      <div className='text-6xl text-light h-[50vh] mx-3'>
        <div>Hello, Connect With <span className='text-green-700 '>Daniel</span>,</div>
        <div className='text-xl mt-5'>A FullStack Developer and A Web3 Developer (Motoko, ICP Blockchain).</div>
      </div>

      <div className='text-lg ml-3'>I'm your ultimate companion to make a lasting impression in digital realm.</div>
      </div>
      {/* <Contact /> */}
    </motion.div>

      <About />
      <Experience />
      <Advantage />
      <Projects />
      <Info />
    </div>
  )
}

export default Details