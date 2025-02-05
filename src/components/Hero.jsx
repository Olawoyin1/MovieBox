// import React from 'react'

// const Hero = () => {
//   return (
//     <div className='hero'>
//         <div className="container2  d-flex align-items-center justify-content-center">

//             <div className="hero-content text-center d-flex gap-2 align-items-center justify-content-center flex-column">
//                 <h2>The Best Streaming Experience</h2>
//                 <small className='muted'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</small>
//                 <button className='button1'>Start Watching Now</button>
                
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero



import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="container2 d-flex align-items-center justify-content-center">
        <motion.div
          className="hero-content text-center d-flex gap-3 align-items-center justify-content-center flex-column"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            The Best Streaming Experience
          </motion.h1>

          <motion.small
            className="muted"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
          >
            StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
          </motion.small>

          <motion.button
            className="button1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Start Watching Now
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
