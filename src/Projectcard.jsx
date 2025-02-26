import React from 'react'
import SSHC from './img/SSHC.png'
import { motion } from 'motion/react'

const Projectcard = () => {

  const card = [
    {
      projectname: 'Shree SheetalNath Homeo Clinic',
      techused: 'ReactJS, Tailwind',
      image: SSHC,
      hoverimg: ''
    },
    {
      projectname: 'DREXTERr Movies',
      techused: 'ReactJS, Tailwind, API Integration, JS'
    },
    {
      projectname: 'Todo List',
      techused: 'HTML5, Tailwind Css, JavaScript'
    },
    {
      projectname: 'Calculator',
      techused: 'HTML5, Tailwind Css, JavaScript'
    }

  ]
  return (
    <div className="py-12">
      <h2 className="text-4xl text-white font-bold font-Montserrat text-center mb-8">Some of My Projects</h2>

      <div className="flex flex-wrap justify-center gap-10 px-4">
        {card.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.1,
              shadow: '#FFb22c'
            }}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-2/6 border-3 border-[#FFB22C] shadow-[#FFb22c] rounded-3xl shadow-md">
            <motion.div


              className="p-3">
              {card.image ? (
                <motion.img className="rounded-3xl w-full h-48 object-cover" src={card.image} alt={card.projectname}
                  whileHover={{ opacity: 0 }}
                />
              ) : (
                <motion.div
                  whileHover={{
                    opacity: 1
                  }}
                  className="w-full h-48 bg-gray-300 rounded-3xl flex items-center justify-center text-White">
                  No Image Available
                </motion.div>
              )}
              <h2 className="text-md font-semibold text-[#FFB22C] mt-2">{card.projectname}</h2>
              <p className="text-white text-sm pb-2">{card.techused}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projectcard
