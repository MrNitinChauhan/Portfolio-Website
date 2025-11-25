// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");




import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import ScrollButton from "./ScrollButton";

// const Tech = () => {
//   return (
//     <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10 place-items-center">

//       {technologies.map((tech) => (
//         <div
//           key={tech.name}
//           className="group relative w-24 h-24 rounded-2xl 
//                      bg-black/40 backdrop-blur-xl border border-white/10
//                      flex items-center justify-center 
//                      transition-all duration-300 hover:scale-105"
//         >
//           {/* glow ring */}
//           <div className="absolute inset-0 rounded-2xl bg-gradient-to-br 
//                           from-[#2CB67D]/0 via-[#7F5AF0]/20 to-[#EC4899]/0 
//                           opacity-0 group-hover:opacity-100 blur-xl 
//                           transition-all duration-500" />

//           {/* icon */}
//           <img
//             src={tech.icon}
//             alt={tech.name}
//             className="w-12 h-12 object-contain z-10"
//           />
//         </div>
//       ))}

//     </div>
//   );
// };

// const Tech = () => {
//   return (
//     <div className="w-full flex flex-col items-center gap-12">

//       {/* SECTION HEADING */}
//       <div className="text-center">
//         <h2 className="text-5xl font-extrabold text-white tracking-tight">
//           Tech Stack
//         </h2>
//         <div className="w-24 h-[4px] bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] mx-auto mt-3 rounded-full" />
//       </div>

//       {/* ICON GRID */}
//       <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10 place-items-center">
//         {technologies.map((tech) => (
//           <div key={tech.name} className="relative group">
            
//             {/* CARD */}
//             <div className="w-24 h-24 rounded-2xl bg-black/40 backdrop-blur-xl 
//                             border border-white/10 flex items-center justify-center 
//                             transition-all duration-300 hover:scale-105 hover:border-white/20
//                             hover:shadow-[0_0_25px_rgba(124,255,206,0.25)]">

//               {/* Glow halo */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-br
//                               from-[#2CB67D]/0 via-[#7F5AF0]/30 to-[#EC4899]/0 
//                               opacity-0 group-hover:opacity-100 blur-xl 
//                               transition-all duration-500" />

//               {/* Icon */}
//               <img
//                 src={tech.icon}
//                 alt={tech.name}
//                 className="w-12 h-12 object-contain z-10"
//               />
//             </div>

//             {/* TOOLTIP NAME */}
//             <p className="absolute left-1/2 -bottom-8 -translate-x-1/2 text-white text-sm 
//                           opacity-0 group-hover:opacity-100 transition-all duration-300 
//                           bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 
//                           whitespace-nowrap shadow-[0_0_15px_rgba(255,255,255,0.1)]">
//               {tech.name}
//             </p>

//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };


// const Tech = () => {
//   return (
//     <div className="w-full relative overflow-hidden py-20">

//       {/* SEXY LUXURY BACKGROUND */}
//       <div className="absolute inset-0 bg-gradient-to-b 
//                       from-[#0F0F10] via-[#0B0B0C] to-black opacity-90" />

//       {/* SOFT ANIMATED WAVES */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_30%,rgba(124,255,206,0.12),transparent_60%)] animate-pulse"></div>
//         <div className="absolute w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(127,90,240,0.12),transparent_60%)] animate-pulse duration-1000"></div>
//       </div>

//       <div className="relative z-10 flex flex-col items-center gap-12">

//         {/* HEADING */}
//         <h2 className="text-5xl font-extrabold text-white tracking-tight">
//           Tech Stack
//         </h2>
//         <div className="w-24 h-[4px] bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] rounded-full" />

//         {/* ICON GRID */}
//         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 mt-10">

//           {technologies.map((tech) => (
//             <div key={tech.name} className="relative group">

//               {/* glam box */}
//               <div className="w-24 h-24 rounded-2xl 
//                               bg-white/5 border border-white/10
//                               backdrop-blur-xl 
//                               flex items-center justify-center
//                               shadow-[0_0_15px_rgba(255,255,255,0.08)]
//                               transition-all duration-300 
//                               hover:scale-110 hover:shadow-[0_0_25px_rgba(124,255,206,0.25)]">

//                 <img
//                   src={tech.icon}
//                   alt={tech.name}
//                   className="w-12 h-12 object-contain"
//                 />
//               </div>

//               {/* tooltip name */}
//               <p className="absolute left-1/2 -bottom-8 -translate-x-1/2 text-white text-sm 
//                             opacity-0 group-hover:opacity-100 transition-all duration-300 
//                             bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 
//                             whitespace-nowrap shadow-[0_0_15px_rgba(255,255,255,0.1)]">
//                 {tech.name}
//               </p>

//             </div>
//           ))}

//         </div>

//       </div>
//     </div>
//   );
// };


const Tech = () => {
  return (
    <div className="w-full relative overflow-hidden py-20">

      {/* 🔥 LUXURY GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b 
                      from-[#101014] via-[#0B0B0D] to-black opacity-95" />

      {/* 🔥 SOFT AMBIENT WAVES (super lightweight) */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute w-full h-full 
                        bg-[radial-gradient(circle_at_30%_20%,rgba(124,255,206,0.12),transparent_60%)] 
                        animate-pulse"></div>

        <div className="absolute w-full h-full 
                        bg-[radial-gradient(circle_at_70%_80%,rgba(127,90,240,0.12),transparent_60%)] 
                        animate-pulse duration-1000"></div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 flex flex-col items-center gap-12">

        {/* 🔥 HEADING */}
        <h2 className="text-5xl font-extrabold text-white tracking-tight">
          Tech Stack
        </h2>
        <div className="w-24 h-[4px] bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] rounded-full" />

        {/* 🔥 ICON GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 mt-10">
          {technologies.map((tech) => (
            <div key={tech.name} className="relative group">

              {/* ✨ LUXURY TECH CARD (High contrast + glass + glow) */}
              <div
                className="w-24 h-24 rounded-2xl 
                           bg-gradient-to-br from-white/30 to-white/10 
                           backdrop-blur-xl 
                           border border-white/20
                           shadow-[0_0_25px_rgba(255,255,255,0.08)]
                           flex items-center justify-center
                           transition-all duration-300
                           hover:scale-110
                           hover:shadow-[0_0_35px_rgba(127,90,240,0.45)]
                           relative overflow-hidden"
              >
                {/* inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br 
                                from-[#7F5AF0]/20 via-[#2CB67D]/10 to-transparent 
                                opacity-0 group-hover:opacity-100 blur-xl 
                                transition-all duration-500" />

                {/* icon */}
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 object-contain relative z-10"
                />
              </div>

              {/* ✨ tooltip */}
              <p
                className="absolute left-1/2 -bottom-8 -translate-x-1/2 
                           text-white text-sm opacity-0 group-hover:opacity-100 
                           transition-all duration-300 
                           bg-black/60 backdrop-blur-md 
                           px-3 py-1 rounded-full border border-white/10 
                           whitespace-nowrap shadow-[0_0_15px_rgba(255,255,255,0.12)]">
                {tech.name}
              </p>

            </div>
          ))}
        </div>

      </div>
      
      {/* CENTERED SCROLL BUTTON (NO BLACK BACKGROUND OVERLAY) */}
      <div className="mt-16 flex justify-center relative z-20">
        <ScrollButton target="work" />
      </div>

    </div>
    
  );
};


export default SectionWrapper(Tech, "tech");
