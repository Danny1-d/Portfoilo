import React from 'react'
import { motion } from "framer-motion"

const Projects = () => {

  const projects = [
    {
      img: "/token.png",
      alt: "This is a token built on the ICP blockchain that function fully",
      tech: ["React", "Motoko", "Tailwind CSS"],
      title: "Token Built on the ICP Blockchain."
    },
    {
      img: "/amazon.png",
      alt: "This is an e-commerce website",
      tech: ["React", "Tailwind CSS"],
      title: "Fully Functional E-commerce Website."
    },
    {
      img: "/NFT-marketplace.png",
      alt: "This is a NFT collection website",
      tech: ["React", "Motoko", "Tailwind CSS"],
      title: "An NFT marketplace that allows you to mint, buy and sell NFTs."
    },
    {
      img: "/Note.png",
      alt: "This is a note pad that keeps record of your note",
      tech: ["React", "Tailwind CSS"],
      title: "Note to Keep Record."
    },
  ]

  return (
    <div className='overflow-hidden'>
    <div id='/projects' className='mt-28'>
      <motion.div className='ml-8 text-xl font-bold'
      whileInView={{ opacity: 1, x:0}} 
      initial={{ opacity : 0, x:'-20vw'}} 
      transition={{duration: 2}}
      >My <span className='text-green-600'>Projects</span></motion.div>

      <div className='mt-28 opacity-80 flex flex-col gap-16 mx-10'>

        {projects.map((project,idx) => (
          <div>
            <div className='relative' key={idx}>
            <img src={project.img} alt={project.alt}  className='w-20% rounded-2xl'/>
              <div className='absolute inset-0 flex gap-5 items-end left-3 bottom-3'>
                {project.tech.map((item, idx) => (
                  <div className='bg-light px-2 py-1 text-sm rounded-full text-black Montserrat' key={idx}>{item}</div>
                ))}
              </div>
            </div>
              <div className='text-light mt-5 flex justify-center Montserrat'>{project.title}</div>
          </div>
        ))}
      </div>

    </div>
    </div>
  )
}

export default Projects;