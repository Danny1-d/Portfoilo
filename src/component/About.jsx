import React from 'react'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='overflow-hidden'>
    <div id='/about' className='mt-52'>

      <motion.div className='text-4xl font-bold text-green-700 font-playFair ml-5'
      whileInView={{ opacity: 1, x:0}} 
      initial={{ opacity : 0, x:'50vw'}} 
      transition={{duration: 1}}
      >
        <div>Creative Front-End and Web3 Developer Turning Ideas Into Digital Reality</div>
      </motion.div>

      <div className='mt-16 text-lg text-ash font-Quicksand ml-5'>
        <div className=''>
          I'm <span className='text-green-800 font-bold'>Daniel</span> a <span className='text-green-800 font-bold'>Front</span>end developer and a <span className='text-green-800 font-bold'>Web3</span> developer specializing in building intuitive application. Have been on my journery for approximately 2 years, working on projects like e-commerce to Non-fungible token marketplace (NFT), to a token. My expertise lies in crafting responsive designs to enhance the essence of modern sophisatication. I'm always passionate about continuously learning new technologies to be upto date on the ever-evolving tech landscape. Always exploring on new ideas to know recent information.
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;