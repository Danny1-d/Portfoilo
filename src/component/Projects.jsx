import React from 'react'
import amazon from "../assets/images/amazon.png"
import Note from "../assets/images/Note.png"
import Token from "../assets/images/token.png"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className='overflow-hidden'>
    <div id='/projects' className='mt-28'>
      <motion.div className='font-Tangerine ml-10 text-3xl font-bold'
      whileInView={{ opacity: 1, x:0}} 
      initial={{ opacity : 0, x:'-20vw'}} 
      transition={{duration: 2}}
      >My <span className='text-green-600'>Projects</span></motion.div>

      <div className='mt-28 opacity-80 flex flex-col gap-16 mx-10'>
        <div>
          <div className='relative'>
            <img src={Token} alt='This is a token built on the ICP blockchain that function fully' />
              <div className='absolute inset-0 flex gap-5 items-end left-3 bottom-3'>
                <div className='bg-light px-4 py-1 rounded-full text-purple-700 font-Tangerine'>React</div>
                <div className='bg-light px-4 py-1 rounded-full text-purple-700 font-Tangerine'>Motoko</div>
                <div className='bg-light px-4 py-1 rounded-full text-purple-700 font-Tangerine whitespace-nowrap'>Tailwind CSS</div>
              </div>
            </div>
          <div className='text-light mt-5 flex justify-center font-Chewy'>Token Built on the ICP Blockchain</div>
        </div>

        <div>
          <div  className='relative'>
            <img src={amazon} alt='This is an e-commerce website' />
            <div className='absolute inset-0 flex gap-5 items-end left-3 bottom-3'>
              <div className='bg-light px-4 py-1 rounded-full text-purple-700 font-Tangerine'>React</div>
              <div className='bg-light px-4 py-1 rounded-full text-purple-700 font-Tangerine'>Tailwind CSS</div>
            </div>
          </div>
          <div className='text-light mt-5 flex justify-center font-Chewy'>Fully Functional E-commerce Website</div>
        </div>

        <div>
          <div  className='relative'>
            <img src={Note} alt='This is a note pad that keeps record of your note' />
            <div className='absolute inset-0 flex gap-5 items-end left-3 bottom-3'>
              <div className='bg-light px-4 py-1 rounded-full text-purple-700 font-Tangerine'>React</div>
              <div className='bg-light px-4 py-1 rounded-full text-purple-700 font-Tangerine'>Tailwind CSS</div>
            </div>
          </div>
          <div className='text-light mt-5 flex justify-center font-Chewy'>Note to Keep Record</div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Projects