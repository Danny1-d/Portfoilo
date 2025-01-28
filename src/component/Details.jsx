import React, { useRef } from 'react'
import About from './About'
import Experience from './Specializations'
import Advantage from "./Advantage"
import Contact from './Contact'
import Projects from './Projects'
import Info from './Info'
import { motion, useInView } from "framer-motion"

const Details = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div id='/' className='mt-44 flex flex-col' 
    whileInView={{ opacity: 1, x:0}} 
    initial={{ opacity : 0, x:50}} 
    transition={{duration: 2}}>
      <div className='xl:animate-slideright animate-slideup'>
      <div className='text-6xl font-playFair text-light h-[50vh] mx-3'>
        <div>Hello, Connect With <span className='text-green-700 font-Quicksand'>Daniel</span>,</div>
        <div className='text-xl mt-5 font-Chewy'>A Frontend Developer and A Web3 Developer (Motoko, ICP Blockchain).</div>
      </div>

      <div className='font-Quicksand text-lg ml-3'>I'm your ultimate companion to make a lasting impression in digital realm.</div>
      </div>

      <About />
      <Experience />
      <Advantage />
      <Projects />
      <Info />
      {/* <Contact /> */}
    </motion.div>
  )
}

export default Details