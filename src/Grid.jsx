import React, { useState, useEffect, useRef } from "react";
import qrcode from "./img/qrcode.png";
import { motion } from 'motion/react';

const Clock = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      whileHover={{
        scale: 1.1
      }}
      drag
      whileDrag={{
        scale: 1.1,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      dragConstraints={useRef(null)}
      className="p-4 text-3xl text-black font-itim font-medium"
    >
      {time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
    </motion.div>
  );
};

const Grid = () => {
  const contref = useRef(null)
  return (
    <div ref={contref} className="grid grid-cols-5 grid-rows-4 w-[1000px] h-[450px] font-Itim text-black border-neutral-700 mt-24 justify-self-center">
      <motion.div
        whileHover={{
          scale: 1.1
        }}
        drag
        whileDrag={{
          scale: 1.2,
          transition: { type: 'spring', stiffness: 300, damping: 20 }
        }}
        dragConstraints={contref}
        className="col-span-2 overflow-hidden row-span-2 bg-[#FFB22C] m-1 rounded-3xl text-3xl p-12">
        I am Bharat, an aspiring frontend developer
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.1
        }}
        drag
        whileDrag={{
          scale: 1.1,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        dragConstraints={contref}
        className="col-span-2 row-span-3 col-start-3 bg-[#FFB22C] m-1 rounded-3xl flex justify-center">
        <img className="p-2 w-[350px]" src={qrcode} alt="QR Code" />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1
        }}
        drag
        whileDrag={{
          scale: 1.1,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        dragConstraints={contref}
        className="col-start-5 bg-[#FFB22C] m-1 rounded-3xl flex justify-center items-center">
        <Clock />
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.1
        }}
        drag
        whileDrag={{
          scale: 1.1,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        dragConstraints={contref}
        className="row-span-3 col-start-5 row-start-2 bg-[#FFB22C] m-1 rounded-3xl text-3xl  p-8">"Check out my projects and let me know what you think!"</motion.div>

      <motion.div
        whileHover={{
          scale: 1.1
        }}
        drag
        whileDrag={{
          scale: 1.1,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        dragConstraints={contref}
        className="col-span-2 col-start-3 row-start-4 bg-[#FFB22C] m-1 rounded-3xl text-2xl p-6">"Wondering what skills I’ve got up my sleeve? Let’s dive in!"</motion.div>

      <motion.div
        whileHover={{
          scale: 1.1
        }}
        drag
        whileDrag={{
          scale: 1.1,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        dragConstraints={contref}
        className="col-span-2 row-span-2 col-start-1 row-start-3 bg-[#FFB22C] m-1 rounded-3xl text-3xl p-10">
        "Take a quick dive into my work experience— Trust me, it's worth exploring!"
      </motion.div>
    </div>
  );
};

export default Grid;
