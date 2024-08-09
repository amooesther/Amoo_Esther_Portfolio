import { RiReactjsLine } from 'react-icons/ri';
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiNodedotjs, SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-400 pb-24'>
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>Tech<span className='text-pink-700'>nologies</span></motion.h2>
      <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
      className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-300 p-4 text-orange-600'
        >
          <SiHtml5 size={50} />
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-300 p-4 text-blue-600'
        >
          <SiCss3 size={50} />
        </motion.div>
        <motion.div 
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-300 p-4 text-teal-600'
        >
          <SiTailwindcss size={50} />
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-300 p-4 text-yellow-600'
        >
          <SiJavascript size={50} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-300 p-4 text-green-600'
        >
          <SiNodedotjs size={50} />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-300 p-4 text-yellow-500'
        >
          <SiFirebase size={50} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-300 p-4 text-cyan-400'
        >
          <RiReactjsLine size={50} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
