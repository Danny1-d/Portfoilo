import React,{useState} from 'react'
import { Link } from "react-scroll"
import { HomeIcon, Pencil1Icon, EnvelopeClosedIcon, BackpackIcon, ArchiveIcon, RowsIcon, MixIcon} from '@radix-ui/react-icons';
import CallIcon from '@mui/icons-material/Call';

const Navbar = () => {

  const [isOpen, setOpen] = useState(false)

  const Nav = () => {
    setOpen(!isOpen)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  const links = [
    {
      to: '/',
      icon: <HomeIcon />,
      name: 'Home',
    },
    {
      to: '/about',
      icon: <Pencil1Icon />,
      name: 'About',
    },
    {
      to: '/service',
      icon: <EnvelopeClosedIcon />,
      name: 'Service',
    },
    {
      to: '/advantage',
      icon: <BackpackIcon />,
      name: 'Advantage',
    },
    {
      to: '/project',
      icon: <ArchiveIcon />,
      name: 'Project',
    },
    {
      to: '/contact',
      icon: <CallIcon />,
      name: 'contact',
    }
  ]


  return (
    <div className='flex mt-20 fixed right-0 mr-5'>
      {/* for desktop */}
      <div className='border rounded-xl px-3 py-3 xl:block hidden'>
        <div className='flex flex-col gap-7 cursor-pointer'>
          {links.map((link, idx) => (
            <Link to={link.to} spy={true} smooth={true} offset={-100} duration={1500} key={idx} className='flex justify-center'>
              {link.icon}
            </Link>
          ))}
        </div>
        </div>


      {/* for mobile */}
      <div className='xl:hidden block  mr-4'>
        <RowsIcon  className={`w-5 h-5 cursor-pointer ${isOpen && 'hidden'}`} onClick={Nav}/>

        {isOpen && (
          <div className={`bg-metal w-[350px] sm:w-[500px] h-screen top-0 fixed right-0 opacity-95 font-Chewy animate-slideright`}>
            <div className='flex justify-end mt-10 mr-5 cursor-pointer' onClick={closeMenu}>
              <MixIcon className='w-7 h-7' />
            </div>

            {links.map((link, idx) => (
              <div className='flex flex-col items-center mt-16 gap-14 text-sm' key={idx}>
                <Link to={link.to} spy={true} smooth={true} offset={-100} duration={1500} onClick={closeMenu} className='flex gap-2 cursor-pointer'> 
                 {link.icon} {link.name}
                </Link>
              </div>
          ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default Navbar