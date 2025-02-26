import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';


const GradientCursor = () => {
 
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);


  const transformX = useTransform(mouseX, [0, window.innerWidth], [-60, window.innerWidth - 60]);
  const transformY = useTransform(mouseY, [0, window.innerHeight], [-60, window.innerHeight - 60]);

 
  const scale = useMotionValue(1);
  useEffect(() => {
    const pulseAnimation = animate(scale, [1, 1.2, 1], {
      repeat: Infinity,
      duration: 2,
      ease: 'easeInOut',
    });
    return () => pulseAnimation.stop(); 
  }, [scale]);


  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    
    window.addEventListener('mousemove', handleMouseMove);

  
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  
  const rotate = useTransform(mouseX, [0, window.innerWidth], [-5, 5]); 

  return (
    <motion.div
      className="fixed w-30 h-30 rounded-full pointer-events-none z-50"
      style={{
        x: transformX,
        y: transformY,
        scale, 
        rotate, 
        background: 'radial-gradient(circle, hsla(38, 100%, 59%, 1) 0%, hsla(0, 0%, 0%, 1) 100%)', 
        backdropFilter: 'blur(5px)', 
        boxShadow: '0 0 20px rgba(255, 178, 46, 1)',
        opacity: 0.7, 
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.7 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      }}
    />
  );
};


const App = () => {
  return (
    <div >

      <GradientCursor />
    </div>
  );
};

export default App;