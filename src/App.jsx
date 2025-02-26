import React from 'react';
import Navbar from './Navbar';
import Grid from './Grid';
import Timeline from './Timeline';
import ProjectCard from './ProjectCard';
import Icons from './Icons';
import GradientCursor from './GradientCursor';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <GradientCursor />
      <Navbar />
      <Grid />
      <div className="text-[#1A202C] mx-40 mt-56">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl text-[#FFB22C] font-montserrat font-bold text-center mb-8"
        >
          Few Things About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg font-open-sans text-white text-center mx-auto max-w-3xl"
        >
          A <span className="font-bold text-[#2D7D9A]  cursor-pointer">Front-end Developer</span> with a solid background in
          <span className="font-bold text-[#D4A017] hover:underline cursor-pointer"> HTML</span>,
          <span className="font-bold text-[#D4A017] hover:underline cursor-pointer"> CSS</span>, and
          <span className="font-bold text-[#D4A017] hover:underline cursor-pointer"> JavaScript</span>, and practical experience using tools like
          <span className="font-bold text-xl text-[#2D7D9A] hover:text-[#D4A017] cursor-pointer"> ReactJS</span> and
          <span className="font-bold text-xl text-[#2D7D9A] hover:text-[#D4A017] cursor-pointer"> Tailwind CSS</span> to build
          modern web interfaces. Focused on creating
          <span className="font-bold text-[#2D7D9A] hover:underline cursor-pointer"> responsive designs</span> that not only look great but also enhance
          user engagement and improve
          site performance
        </motion.p>
      </div>
      <Timeline />
      <ProjectCard />
      <Icons />
    </div>
  );
};

export default App;