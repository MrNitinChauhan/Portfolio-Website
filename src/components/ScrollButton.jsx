// import React from "react";
// import { motion } from "framer-motion";

// const ScrollButton = ({ target }) => {
//   return (
//     <a href={`#${target}`} className="flex justify-center mt-10">
//       <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2'>
//         <motion.div
//           animate={{ y: [0, 24, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
//           className='w-3 h-3 rounded-full bg-[#915EFF] mb-1'
//         />
//       </div>
//     </a>
    
//   );
// };

// export default ScrollButton;


import React from "react";
import { motion } from "framer-motion";

const ScrollButton = ({ target = "about" }) => {
  return (
    <a href={`#${target}`} className="flex justify-center mt-10">
      <div
        className="w-[35px] h-[64px] rounded-3xl border-2 border-white/40 
                   flex justify-center items-start p-2 backdrop-blur-xl"
      >
        <motion.div
          animate={{ y: [0, 26, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="w-3 h-3 rounded-full bg-white/80 mb-1"
        />
      </div>
    </a>
  );
};

export default ScrollButton;