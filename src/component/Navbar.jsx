import React,{useState, useEffect} from 'react'
import Home from "../assets/images/home.png"
import About from "../assets/images/about.png"
import Message from "../assets/images/message.jpeg"
import Tools from "../assets/images/projects.png"
import menu from "../assets/images/menu.png"
import { Link } from "react-scroll"
import Project from "../assets/images/project.png"
import Cancel from "../assets/images/cancel.png"

const Navbar = () => {

  const [isOpen, setOpen] = useState(false)

  const Nav = () => {
    setOpen(!isOpen)
  }

  const closeMenu = () => {
    setOpen(false)
  }


  return (
    <div className='flex mt-20 fixed right-0 mr-5'>
      <div className='border rounded-xl px-3 py-3 xl:block hidden'>
        <div className='flex flex-col gap-7 cursor-pointer'>
          <Link to="/" spy={true} smooth={true} offset={-100} duration={1500}>
          <img src={Home} className='w-8 rounded-full'/>
          </Link>

          <Link to="/about" spy={true} smooth={true} offset={-100} duration={1500}>
          <img src={About} className='w-8 rounded-full'/>
          </Link>
          <Link to="/service" spy={true} smooth={true} offset={-30} duration={1500}>
          <img src={Message} className='w-8 rounded-full'/>
          </Link>
          <Link to="/advantage" spy={true} smooth={true} offset={-100} duration={1500}>
          <img src={Tools} className='w-8 rounded-full'/>
          </Link>
          <Link to="/projects" spy={true} smooth={true} offset={-100} duration={1500}>
          <img src={Project} className='w-8 rounded-full'/>
          </Link>
        </div>
      </div>

      <div className='xl:hidden block  mr-4'>
        <img src={menu} className={`w-10 border rounded-full cursor-pointer ${isOpen && 'hidden'}`} onClick={Nav}/>

        {isOpen && (
          <div className={`bg-metal w-[350px] sm:w-[500px] h-screen top-0 fixed right-0 opacity-95 font-Chewy text-ash animate-slideright`}>
            <div className='flex justify-end mt-10 mr-5 cursor-pointer' onClick={closeMenu}>
              <img src={Cancel} className='w-7' />
            </div>

            <div className='mt-8 flex justify-center text-xl'>Menu</div>

            <div className='flex flex-col items-center mt-16 gap-14 text-sm'>
            <Link to="/" spy={true} smooth={true} offset={-100} duration={1500} onClick={closeMenu} >
              <button>Home</button>
            </Link>

            <Link to="/about" spy={true} smooth={true} offset={-100} duration={1500} onClick={closeMenu} >
              <button>About</button>
            </Link>

            <Link to="/service" spy={true} smooth={true} offset={-20} duration={1500} onClick={closeMenu} >
              <button>Service</button>
            </Link>

            <Link to="/advantage" spy={true} smooth={true} offset={-100} duration={1500} onClick={closeMenu} >
              <button>Advantage</button>
            </Link>

            <Link to="/projects" spy={true} smooth={true} offset={-100} duration={1500} onClick={closeMenu} >
              <button>Projects</button>
            </Link>

            <Link to="/contact" spy={true} smooth={true} offset={-100} duration={1500} onClick={closeMenu} >
              <button>Contact</button>
            </Link>
            </div>
          </div>
        )}

      </div>


    </div>
  )
}

export default Navbar