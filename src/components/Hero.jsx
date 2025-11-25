// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915EFF]'>Nitin </span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop 3D visuals, user <br className='sm:block hidden' />
//             interfaces and web applications
//           </p>
//         </div>
//       </div>

//       <ComputersCanvas />

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;





import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

      {/* Premium Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-120px] w-[650px] h-[650px] 
                        bg-[#7F5AF0]/40 blur-[180px]" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[550px] h-[550px] 
                        bg-[#2CB67D]/30 blur-[170px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* BIG INTRO - YOUR NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-tight"
        >
          <span className="text-transparent bg-clip-text 
                           bg-gradient-to-r from-[#2CB67D] to-[rgb(127,90,240)]">
            Hi, I'm Nitin
          </span>
        </motion.h1>

        {/* Small luxury tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="mt-3 text-white/90 text-2xl sm:text-3xl tracking-wide font-semibold"
        >
          Crafting Refined Web Experiences
        </motion.h2>

        {/* Hero subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="mt-6 text-[#d4d4d4] text-lg sm:text-xl max-w-xl leading-[32px]"
        >
          FullStack developer focused on building clean, modern and visually elegant interfaces —
          blending creativity with precision.
        </motion.p>

        {/* Floating Gradient Shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute w-[380px] h-[380px] rounded-full 
                     bg-gradient-to-br from-[#7F5AF0]/25 to-[#2CB67D]/25 
                     blur-[120px] -z-10"
        />

      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-12 w-full flex justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-white/40 
                          flex justify-center items-start p-2 backdrop-blur-xl">
            <motion.div
              animate={{ y: [0, 26, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-white/80 mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;

