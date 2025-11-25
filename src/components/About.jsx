import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";



import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className='xs:w-[250px] w-full'
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} `}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className='mt-4  text-secondary text-[17px] max-w-3xl leading-[30px]'
//       >
//         I'm a passionate software developer skilled in C++ , JavaScript, and TypeScript, with hands-on experience in building dynamic and scalable applications. I work confidently with modern frameworks and libraries like React, Node.js, and Three.js, along with strong fundamentals in HTML, CSS, and Tailwind CSS. I’m a fast learner who loves solving complex problems and creating efficient, user-friendly solutions. Let’s collaborate and turn your ideas into powerful, real-world applications!
//       </motion.p>

//         <div className='mt-20 flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//         </div>
      
//     </>
//   );
// };


// const About = () => {
//   return (
//     <div className="w-full flex flex-col lg:flex-row gap-10 mt-10">

//       {/* LEFT SECTION */}
//       <motion.div
//         variants={fadeIn("left", "spring", 0.2, 1)}
//         className="lg:w-1/3 w-full bg-[#111] p-8 rounded-2xl border border-white/10 shadow-lg"
//       >
//         <h1 className="text-4xl font-bold text-white">Hi, I'm Nitin 👋</h1>
//         <p className="mt-3 text-secondary text-[17px] leading-[28px]">
//           A passionate Full-Stack Developer crafting visually appealing,
//           efficient, and scalable applications.
//         </p>

//         <div className="mt-6">
//           <p className="text-white font-semibold text-lg">Tech Stack:</p>
//           <div className="flex flex-wrap gap-3 mt-3">
//             {["C++", "JavaScript", "TypeScript", "React", "Node.js"].map((skill) => (
//               <span
//                 key={skill}
//                 className="px-3 py-1 text-sm bg-white/10 text-white rounded-lg border border-white/10"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       </motion.div>

//       {/* CENTER SECTION (MAIN ABOUT ME CARD) */}
//       <motion.div
//         variants={fadeIn("up", "spring", 0.3, 1)}
//         className="lg:w-1/3 w-full bg-[#141414] p-10 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden"
//       >
//         {/* Floating glow animation */}
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-2xl" />

//         <motion.h2 variants={textVariant()} className="text-white text-4xl font-extrabold text-center mb-4">
//           About Me
//         </motion.h2>

//         <motion.p
//           variants={fadeIn("", "", 0.2, 1)}
//           className="text-secondary text-[17px] leading-[28px] relative z-10 text-center"
//         >
//           I'm a passionate software developer skilled in C++, JavaScript, and
//           TypeScript, with hands-on experience building dynamic and scalable
//           applications using React, Node.js, and Three.js.
//           <br /><br />
//           I love solving complex problems and creating user-friendly,
//           high-performance experiences.
//         </motion.p>
//       </motion.div>

//       {/* RIGHT SECTION (Animations / 3D / Skills Icons) */}
//       <motion.div
//         variants={fadeIn("right", "spring", 0.2, 1)}
//         className="lg:w-1/3 w-full bg-[#111] p-8 rounded-2xl border border-white/10 shadow-lg flex flex-col items-center justify-center"
//       >
//         <h2 className="text-white font-bold text-2xl mb-4">Tools I Use</h2>

//         <div className="grid grid-cols-3 gap-5 mt-3">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
//               whileHover={{ scale: 1.1 }}
//             >
//               <img src={service.icon} className="w-12 h-12 mx-auto" />
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//     </div>
//   );
// };










// const About = () => {
//   return (
//     <section className="relative w-full py-28 overflow-hidden">

//       {/* LUXURY BACKGROUND GLOW */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#7F5AF0]/40 via-[#2CB67D]/30 to-transparent blur-[160px]" />
//         <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#2CB67D]/20 to-[#7F5AF0]/10 blur-[130px]" />
//       </div>

//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 relative z-10">

//         {/* ---------------- LEFT LUXURY INTRO ---------------- */}
//         <motion.div
//           variants={fadeIn("left", "spring", 0.2, 1)}
//           className="flex flex-col justify-center"
//         >
//           <motion.h1
//             animate={{ y: [0, -6, 0] }}
//             transition={{ duration: 5, repeat: Infinity }}
//             className="text-[58px] font-extrabold leading-[1.1] text-white"
//           >
//             Crafting  
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0]">
//               Digital Elegance
//             </span>
//           </motion.h1>

//           <p className="mt-6 text-secondary text-lg leading-[32px] max-w-lg">
//             I create modern, seamless digital experiences with a balance of
//             logic, creativity, and luxury-grade visual refinement.
//           </p>
//         </motion.div>

//         {/* ---------------- RIGHT PREMIUM GLASS CARD ---------------- */}
//         <motion.div
//           variants={fadeIn("up", "spring", 0.3, 1)}
//           className="relative p-[2px] rounded-3xl bg-gradient-to-tr from-[#2CB67D]/40 via-[#7F5AF0]/40 to-transparent"
//         >
//           <div className="rounded-3xl bg-black/60 backdrop-blur-2xl border border-white/10 p-12 shadow-[0_0_50px_rgba(255,255,255,0.05)]">

//             <h2 className="text-4xl font-bold text-white text-center tracking-wide">
//               About Me
//             </h2>

//             <p className="mt-6 text-secondary text-[17px] text-center leading-[30px]">
//               I'm a developer who focuses on precision, clarity, and refined
//               design. I transform ideas into seamless products, combining strong
//               engineering with a luxury-grade aesthetic and thoughtful
//               user-experience.
//             </p>

//             <div className="w-24 mx-auto mt-8 h-[4px] bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] rounded-full" />

                

//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };






// const About = () => {
//   return (
//     <section className="relative w-full py-28 overflow-hidden">

//       {/* LUXURY BACKGROUND GLOW */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] 
//                         bg-gradient-to-br from-[#7F5AF0]/40 via-[#2CB67D]/30 
//                         to-transparent blur-[160px]" />
//         <div className="absolute bottom-0 left-0 w-[450px] h-[450px] 
//                         bg-gradient-to-tr from-[#2CB67D]/20 to-[#7F5AF0]/10 
//                         blur-[130px]" />
//       </div>

//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 relative z-10">

//         {/* ---------------- LEFT LUXURY INTRO ---------------- */}
//         <motion.div
//           variants={fadeIn("left", "spring", 0.2, 1)}
//           className="flex flex-col justify-center"
//         >
//           <motion.h1
//             animate={{ y: [0, -6, 0] }}
//             transition={{ duration: 5, repeat: Infinity }}
//             className="text-[58px] font-extrabold leading-[1.1] text-white"
//           >
//             Crafting  
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0]">
//               Digital Elegance
//             </span>
//           </motion.h1>

//           <p className="mt-6 text-secondary text-lg leading-[32px] max-w-lg">
//             I create modern, seamless digital experiences with a balance of
//             logic, creativity, and luxury-grade visual refinement.
//           </p>
//         </motion.div>

//         {/* ---------------- RIGHT PREMIUM GLASS CARD ---------------- */}
//         <motion.div
//           variants={fadeIn("up", "spring", 0.3, 1)}
//           className="relative p-[2px] rounded-3xl 
//                      bg-gradient-to-tr from-[#2CB67D]/40 via-[#7F5AF0]/40 to-transparent"
//         >
//           <div className="rounded-3xl bg-black/60 backdrop-blur-2xl 
//                           border border-white/10 p-12 
//                           shadow-[0_0_50px_rgba(255,255,255,0.05)]">

//             <h2 className="text-4xl font-bold text-white text-center tracking-wide">
//               About Me
//             </h2>

//             <p className="mt-6 text-secondary text-[17px] text-center leading-[30px]">
//               I'm a developer who focuses on precision, clarity, and refined
//               design. I transform ideas into seamless products, combining strong
//               engineering with a luxury-grade aesthetic and thoughtful
//               user-experience.
//             </p>

//             {/* underline + centered CV button */}
//             <div className="flex flex-col items-center justify-center mt-8">

//                 {/* underline */}
//                 <div className="w-24 h-[4px] bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] rounded-full" />

//                 {/* CV BUTTON */}
//                 <motion.a
//                   href="/your-cv.pdf"  // <-- replace with your actual CV path
//                   download
//                   whileHover={{
//                     scale: 1.08,
//                     boxShadow: "0 0 25px rgba(124,255,206,0.35)"
//                   }}
//                   whileTap={{ scale: 0.96 }}
//                   className="mt-8 px-10 py-3 rounded-full 
//                              bg-black/50 backdrop-blur-xl border border-white/20
//                              text-white font-semibold tracking-wide uppercase
//                              shadow-[0_0_25px_rgba(255,255,255,0.05)]
//                              relative overflow-hidden cursor-pointer 
//                              transition-all duration-300"
//                 >
//                   {/* animated swipe light */}
//                   <motion.div
//                     animate={{ x: ["-200%", "200%"] }}
//                     transition={{
//                       repeat: Infinity,
//                       duration: 2.4,
//                       ease: "easeInOut",
//                     }}
//                     className="absolute inset-0 bg-gradient-to-r 
//                                from-transparent via-[#2CB67D]/40 to-transparent
//                                blur-2xl"
//                   />

//                   {/* luxury color glow */}
//                   <div className="absolute inset-0 bg-gradient-to-r 
//                                   from-[#2CB67D]/20 via-[#7F5AF0]/30 to-[#8A2BE2]/20
//                                   opacity-40 blur-xl" />

//                   <span className="relative z-10">View My CV</span>
//                 </motion.a>

//             </div>

//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };


// const About = () => {
//   return (
//     <section className="relative w-full py-28 overflow-hidden">

//       {/* LUXURY BACKGROUND GLOW */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] 
//                         bg-gradient-to-br from-[#7F5AF0]/40 via-[#2CB67D]/30 
//                         to-transparent blur-[160px]" />
//         <div className="absolute bottom-0 left-0 w-[450px] h-[450px] 
//                         bg-gradient-to-tr from-[#2CB67D]/20 to-[#7F5AF0]/10 
//                         blur-[130px]" />
//       </div>

//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 relative z-10">

//         {/* ---------------- LEFT LUXURY INTRO ---------------- */}
//         <motion.div
//           variants={fadeIn("left", "spring", 0.2, 1)}
//           className="flex flex-col justify-center"
//         >
//           <motion.h1
//             animate={{ y: [0, -6, 0] }}
//             transition={{ duration: 5, repeat: Infinity }}
//             className="text-[58px] font-extrabold leading-[1.1] text-white"
//           >
//             Crafting  
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0]">
//               Digital Elegance
//             </span>
//           </motion.h1>

//           <p className="mt-6 text-secondary text-lg leading-[32px] max-w-lg">
//             I create modern, seamless digital experiences with a balance of
//             logic, creativity, and luxury-grade visual refinement.
//           </p>
//         </motion.div>

//         {/* ---------------- RIGHT PREMIUM GLASS CARD ---------------- */}
//         <motion.div
//           variants={fadeIn("up", "spring", 0.3, 1)}
//           className="relative p-[2px] rounded-3xl 
//                      bg-gradient-to-tr from-[#2CB67D]/40 via-[#7F5AF0]/40 to-transparent"
//         >
//           <div className="rounded-3xl bg-black/60 backdrop-blur-2xl 
//                           border border-white/10 p-12 
//                           shadow-[0_0_50px_rgba(255,255,255,0.05)]">

//             <h2 className="text-4xl font-bold text-white text-center tracking-wide">
//               About Me
//             </h2>

//             <p className="mt-6 text-secondary text-[17px] text-center leading-[30px]">
//               I'm a developer who focuses on precision, clarity, and refined
//               design. I transform ideas into seamless products, combining strong
//               engineering with a luxury-grade aesthetic and thoughtful
//               user-experience.
//             </p>

//             {/* underline + centered CV button */}
//             <div className="flex flex-col items-center justify-center mt-8">

//                 {/* underline */}
//                 <div className="w-24 h-[4px] bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] rounded-full" />

//                 {/* 🔥 HIGHLIGHTED LUXURY CV BUTTON */}
//                 <motion.a
//                   href="/your-cv.pdf"  
//                   download
//                   whileHover={{
//                     scale: 1.1,
//                     boxShadow: "0 0 35px rgba(255, 122, 255, 0.45)",
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   className="mt-8 px-10 py-3 rounded-full 
//                              bg-gradient-to-r from-[#7F5AF0] via-[#A855F7] to-[#EC4899]
//                              text-white font-semibold tracking-wide uppercase
//                              shadow-[0_0_30px_rgba(236,72,153,0.35)]
//                              border border-white/10
//                              relative overflow-hidden cursor-pointer 
//                              transition-all duration-300"
//                 >
//                   {/* sliding shine */}
//                   <motion.div
//                     animate={{ x: ["-180%", "180%"] }}
//                     transition={{
//                       repeat: Infinity,
//                       duration: 2.2,
//                       ease: "easeInOut",
//                     }}
//                     className="absolute inset-0 bg-gradient-to-r 
//                                from-transparent via-white/40 to-transparent
//                                blur-xl opacity-40"
//                   />

//                   <span className="relative z-10">View My CV</span>
//                 </motion.a>

//             </div>

//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };


const About = () => {
  return (
    <section className="relative w-full py-28 overflow-hidden">

      {/* OPTIMIZED LUXURY BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none contain-paint">
        <div
          className="absolute top-0 right-0 w-[480px] h-[480px] 
          bg-gradient-to-br from-[#7F5AF0]/35 via-[#2CB67D]/20 to-transparent 
          blur-[110px] will-change-transform"
        />
        <div
          className="absolute bottom-0 left-0 w-[350px] h-[350px] 
          bg-gradient-to-tr from-[#2CB67D]/15 to-[#7F5AF0]/10 
          blur-[80px] will-change-transform"
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 relative z-10">

        {/* ------------------------------------------------ LEFT PANEL ------------------------------------------------ */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 1)}
          className="flex flex-col justify-center contain-paint"
        >
          <motion.h1
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="will-change-transform text-[56px] font-extrabold leading-[1.1] text-white"
          >
            Crafting  
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0]">
              Digital Elegance
            </span>
          </motion.h1>

          <p className="mt-6 text-secondary text-lg leading-[30px] max-w-lg">
            I create modern, seamless digital experiences with a balance of
            logic, creativity, and luxury-grade visual refinement.
          </p>
        </motion.div>

        {/* ------------------------------------------------ RIGHT LUXURY CARD ------------------------------------------------ */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 1)}
          className="relative p-[2px] rounded-3xl bg-gradient-to-tr 
          from-[#2CB67D]/35 via-[#7F5AF0]/35 to-transparent contain-paint"
        >
          <div
            className="rounded-3xl bg-black/60 backdrop-blur-xl 
            border border-white/10 p-12 
            shadow-[0_0_40px_rgba(255,255,255,0.05)] contain-paint"
          >
            <h2 className="text-4xl font-bold text-white text-center tracking-wide">
              About Me
            </h2>

            <p className="mt-6 text-secondary text-[17px] text-center leading-[28px]">
              I'm a developer who focuses on precision, clarity, and refined
              design. I transform ideas into seamless products, combining strong
              engineering with a luxury-grade aesthetic and thoughtful
              user-experience.
            </p>

            {/* -------------------- underline + CV button -------------------- */}
            <div className="flex flex-col items-center justify-center mt-8">

              {/* underline */}
              <div className="w-24 h-[4px] bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] rounded-full" />

              {/* -------------------- ULTRA-HIGHLIGHT CV BUTTON -------------------- */}
              <motion.a
                href="/your-cv.pdf"
                download
                whileHover={{
                  scale: 1.12,
                  boxShadow: "0 0 40px rgba(255, 122, 255, 0.45)",
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-10 py-3 rounded-full 
                bg-gradient-to-r from-[#7F5AF0] via-[#A855F7] to-[#EC4899]
                text-white font-semibold tracking-wide uppercase
                shadow-[0_0_30px_rgba(236,72,153,0.35)]
                border border-white/10
                relative overflow-hidden cursor-pointer 
                transition-all duration-300 will-change-transform"
              >
                {/* sliding shine */}
                <motion.div
                  animate={{ x: ["-180%", "180%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.1,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r 
                  from-transparent via-white/40 to-transparent
                  blur-lg opacity-40 will-change-transform"
                />

                <span className="relative z-10">View My CV</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};






export default SectionWrapper(About, "about");
