import React from 'react'
import { motion } from 'motion/react';

const Navbar = () => {
  const navmenu = [
    { navname: 'Home' },
    { navname: ' Projects' },
    { navname: 'Experience' },
    { navname: 'Contact' },
    { navname: 'Resume' }

  ]

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className='flex mb-5 border-[15px] border-black rounded-4xl bg-[#FFB22C] justify-between w-5xl text-xl align-middle justify-self-center '>
      <div className='flex p-7 pl-12  text-black font-Montserrat'>Bharat Jain</div>
      <div>
        <ul className=' flex p-7  text-black font-serif '>
          {navmenu.map((navmenu, index) => (
            <motion.li key={index}
              whileHover={{
                color: 'white'
              }}
              className='px-6 font-Montserrat'>{navmenu.navname}</motion.li>
          ))}



        </ul></div>

    </motion.div>
  )
}

export default Navbar
