// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: "JavaScript Mastery",
//           from_email: form.email,
//           to_email: "sujata@jsmastery.pro",
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           alert("Ahh, something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <div
//       className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
//     >
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className='mt-12 flex flex-col gap-8'
//         >
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Name</span>
//             <input
//               type='text'
//               name='name'
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your good name?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your email</span>
//             <input
//               type='email'
//               name='email'
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your web address?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Message</span>
//             <textarea
//               rows={7}
//               name='message'
//               value={form.message}
//               onChange={handleChange}
//               placeholder='What you want to say?'
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>

//           <button
//             type='submit'
//             className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");




import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Me",
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thanks! I’ll get back to you soon.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="relative w-full py-24 overflow-hidden">

      {/* LUXURY GLOW BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] 
                        bg-[#7F5AF0]/25 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] 
                        bg-[#2CB67D]/25 blur-[140px]" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* CENTERED HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white tracking-wide">
            Contact Me
          </h2>
          <div className="w-28 h-[4px] bg-gradient-to-r 
                          from-[#2CB67D] to-[#7F5AF0] mx-auto mt-3 rounded-full" />
          <p className="text-[#c7c7c7] max-w-xl mx-auto mt-4 text-[16px] leading-[28px]">
            Feel free to reach out for collaborations, work opportunities, or anything you’d like to share.
          </p>
        </div>

        {/* FORM + RIGHT SIDE */}
        <div className="grid lg:grid-cols-2 gap-14 max-w-5xl mx-auto items-start">


          {/* ----- FORM ----- */}
          <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-black/40 backdrop-blur-2xl rounded-2xl 
                         border border-white/10 p-10 shadow-[0_0_30px_rgba(255,255,255,0.05)] 
                         flex flex-col gap-8"
            >
              {/* INPUTS */}
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="glass-input"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="glass-input"
                />
              </label>

              <label className="flex flex-col">
                {/* <span className="text-white font-medium mb-2">Your Message</span> */}
                <span className="text-white font-medium mb-3 text-[15px] tracking-wide">
                           Your Name
                </span>

                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to say?"
                  className="glass-input resize-none"
                />
              </label>

              {/* LUXURY SUBMIT BUTTON */}
              <button
                type="submit"
                className="px-10 py-3 rounded-full bg-gradient-to-r 
                           from-[#7F5AF0] via-[#A855F7] to-[#2CB67D]
                           font-semibold text-white text-[16px] uppercase 
                           shadow-[0_0_25px_rgba(127,90,240,0.35)]
                           transition-all duration-300 hover:scale-105"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* ----- RIGHT SIDE: LIGHTWEIGHT ELEGANT GRAPHIC ----- */}
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center">

              {/* Dark vignette for contrast */}
              <div className="absolute w-80 h-80 rounded-full bg-black/40 blur-3xl opacity-70"></div>

              {/* Gradient Circle */}
                <div className="w-72 h-72 rounded-full bg-gradient-to-br 
                                from-[#7F5AF0]/60 to-[#2CB67D]/60 
                                shadow-[0_0_40px_rgba(255,255,255,0.1)]
                                backdrop-blur-3xl border border-white/10
                                animate-pulse" />

                {/* Inner glass circle */}
                <div className="absolute w-52 h-52 rounded-full border border-white/20 
                                bg-white/5 backdrop-blur-xl shadow-[0_0_25px_rgba(255,255,255,0.15)] 
                                flex items-center justify-center">
                  <p className="text-white opacity-80 text-center leading-7 px-4">
                    Let's collaborate <br /> 
                    and build something amazing.
                  </p>
                </div>
                </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

