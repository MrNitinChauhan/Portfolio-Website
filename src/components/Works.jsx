import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         tiltMaxAngleX={45}
//         tiltMaxAngleY={45}
//         scale={1}
//         transitionSpeed={450}
//         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
//       >
//         <div className='relative w-full h-[230px]'>
//           <img
//             src={image}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl'
//           />

//           <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//           </div>
//         </div>

//         <div className='mt-5'>
//           <h3 className='text-white font-bold text-[24px]'>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>

//         <div className='mt-4 flex flex-wrap gap-2'>
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
    
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText}`}>My work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
//       </motion.div>

//       <div className='w-full flex '>
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className='mt-3  text-secondary text-[17px] max-w-3xl leading-[30px]'
//         >
//           Following projects showcases my skills and experience through
//           real-world examples of my work. Each project is briefly described with
//           links to code repositories and live demos in it. It reflects my
//           ability to solve complex problems, work with different technologies,
//           and manage projects effectively.
//         </motion.p>
//       </div>

//       <div className='mt-20 flex flex-wrap gap-7'>
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
      
//     </>
//   );
// };

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.75)}>
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1}
        transitionSpeed={350}
        className="bg-black/40 backdrop-blur-xl border border-white/10 
                   p-5 rounded-2xl sm:w-[350px] w-full 
                   shadow-[0_0_20px_rgba(255,255,255,0.05)] 
                   hover:shadow-[0_0_30px_rgba(124,255,206,0.15)]
                   transition-all duration-300"
      >
        <div className="relative w-full h-[210px] rounded-xl overflow-hidden">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-xl"
          />

          {/* GitHub Icon */}
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-xl 
                         flex justify-center items-center cursor-pointer 
                         border border-white/10 transition-all 
                         hover:scale-110 hover:border-white/20"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[22px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[13px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="w-full relative py-20">

      {/* Luxury Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-[400px] h-[400px] 
                        bg-[#7F5AF0]/20 blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] 
                        bg-[#2CB67D]/15 blur-[130px]" />
      </div>

      {/* Centered Heading */}
      <motion.div variants={textVariant()} className="text-center relative z-10">
        <h2 className="text-white text-5xl font-extrabold tracking-wide">
          Projects
        </h2>
        <div className="w-28 h-[4px] bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] mx-auto mt-3 rounded-full" />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-[#c7c7c7] text-[16px] 
                  max-w-2xl mx-auto text-center leading-[28px]
                  tracking-wide opacity-90"
      >
        A curated selection of the projects I've built — crafted with clean UI,
        thoughtful engineering, and attention to detail.
      </motion.p>


      {/* Projects Grid */}
      <div className="mt-16 flex flex-wrap justify-center gap-10 relative z-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};



export default SectionWrapper(Works, "work");
