import React from 'react'

const Contact = () => {
  return (
    <div className='mt-24'>
      <div className='font-bold font-roboto text-2xl mx-5 text-light'> Let's <span className='text-green-700'>Collaborate</span> to Achieve Great Results </div>

      <form className="mt-28 grid grid-cols-2 mx-8 gap-20 text-light">
        <div className='flex flex-col'>
        <label className="mb-5 text-lg font-Imperial">Full Name</label>
        <input type='text' placeholder='Full Name' className='bg-transparent outline-none'/>
        </div>

        <div className='flex flex-col'>
        <label className="mb-5 text-lg font-Imperial">Email</label>
        <input type='text' placeholder='Email' className='bg-transparent outline-none'/>
        </div>

        <div className='flex flex-col'>
        <label className="mb-5 text-lg font-Imperial">Theme</label>
        <input type='text' placeholder='Your Theme' className='bg-transparent outline-none'/>
        </div>

        <div className='flex flex-col'>
        <label className="mb-5 text-lg font-Imperial">Outlook</label>
        <input type='text' placeholder='Message' className='bg-transparent outline-none'/>
        </div>

        <button className='bg-green-800 px-3 py-3 w-36 rounded-full'>Connect</button>

      </form>
    </div>
  )
}

export default Contact;