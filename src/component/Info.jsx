import React from 'react'
import { motion } from 'framer-motion'
import { LinkedInLogoIcon, TwitterLogoIcon, EnvelopeOpenIcon, DrawingPinFilledIcon } from "@radix-ui/react-icons";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Info = () => {
  return (
    <div className='overflow-hidden'>
    <div id='/contact' className='mt-20'>
      <motion.div className='font-bold text-3xl mx-5 text-light'
      whileInView={{ opacity: 1, x:0}} 
      initial={{ opacity : 0, x:'50vw'}} 
      transition={{duration: 1}}
      > Let's <span className='text-green-700'>Collaborate</span> to Achieve Great Results.</motion.div>

      <div className='grid grid-cols-1 sm:grid-cols-2 mx-10 mt-20 gap-5'>

        <a href="https://www.linkedin.com/in/daniel-obijuru-aa05062b1/" className='flex justify-between items-center border rounded-xl px-2 py-2 hover:bg-light'>
          <LinkedInLogoIcon className='w-6 h-6'/><DrawingPinFilledIcon /> 
        </a>

        
        <a href='https://x.com/DannyKfty?t=87KlVhxXtLT6A01xazamrQ&s=09' className='flex justify-between items-center border rounded-xl px-2 py-2 hover:bg-light'>
          <TwitterLogoIcon className='w-6 h-6'/><DrawingPinFilledIcon />
        </a>

        <a href="https://wa.me/+2347077377379" className='flex justify-between items-center border rounded-xl px-2 py-2 hover:bg-light'>
           <WhatsAppIcon className='w-6 h-6'/><DrawingPinFilledIcon />
        </a>

        
        <a href='mailto:danielobijuru01@gmail.com' className='flex justify-between items-center border rounded-xl px-2 py-2 hover:bg-light'>
          <EnvelopeOpenIcon className='w-6 h-6'/><DrawingPinFilledIcon />
        </a>

      </div>
    </div>
    </div>
  )
}

export default Info