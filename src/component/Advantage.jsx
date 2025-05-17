import React from 'react'
import { motion } from 'framer-motion'

const Advantage = () => {

  const skills = [
    {
      img: '/next.jpeg',
      mark: "75%",
      name: "Next.js"
    },
    {
      img: '/ts.png',
      mark: "70%",
      name: "TypeScript"
    },
    {
      img: '/react.webp',
      mark: "85%",
      name: "React.js"
    },
    {
      img: '/node.png',
      mark: "70%",
      name: "Node.js"
    },
    {
      img: '/js.png',
      mark: "80%",
      name: "JavaScript"
    },
    {
      img: '/motoko.jpeg',
      mark: "85%",
      name: "Motoko"
    },
  ]
  return (
    <div className='overflow-hidden'>
    <div id='/advantage' className='mt-28'>
      <motion.div className='ml-8 text-xl font-bold'
      whileInView={{ opacity: 1, x:0}} 
      initial={{ opacity : 0, x:'50vw'}} 
      transition={{duration: 2}}
      >MY <span className='text-green-600'>Advantage</span></motion.div>

      <div className='grid grid-cols-2 sm:grid-cols-3 mt-20 sm:gap-4 gap-2'>

        {skills.map((skill, idx) => (
          <div className='flex flex-col items-center' key={idx}> 
            <div className='border px-16 py-10 rounded-full flex flex-col items-center hover:border-green-500'>
              <img src={skill.img} alt='js icon' className='md:w-16 w-8 rounded-xl '/>
              <div className='mt-10 font-bold text-xl text-green-700'>{skill.mark}</div>
            </div>
            <div className='mt-7 text-light'>{skill.name}</div>
          </div>
        ))}

      </div>

    </div>
    </div>
  )
}

export default Advantage