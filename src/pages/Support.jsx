// import React from 'react'
// import FAQ from '../components/FAQ'
// import Trial from '../components/Trial'

// const Support = () => {
//   return (
//     <div>
//         <div className="container2">

//             <div className="d-flex flex-column flex-md-row gap-4 m-0 my-4">
//                 <div className="col d-flex flex-column gap-3 p-0">
//                     <h4>Welcome To Our Support Page!</h4>
//                     <small className="muted">We're here to help you with any problems you may be having with our product.</small>

//                     <div className="image-support-box">
//                         <img src="../../Images/heroo.jpg" alt="" />
//                     </div>
//                 </div>



//                 <div className="col-md-8">
//                     <form action="" className='p-4 d-flex flex-column gap-3'>
//                         <div className="m-0 gap-md-0 gap-3 row">
//                             <div className="input-field  col-md-6">
//                                 <label htmlFor="firstname">First Name</label>
//                                 <input type="text" className='input' placeholder='Enter First Name' />
//                             </div>

//                             <div className="input-field col-md-6">
//                                 <label htmlFor="lastname">Last Name</label>
//                                 <input type="text" className='input' placeholder='Enter Last Name' />
//                             </div>
//                         </div>

//                         <div className="row gap-md-0 gap-3">
//                             <div className="input-field col-md-6">
//                                 <label htmlFor="email">Email</label>
//                                 <input type="email" className='input' placeholder='Enter Email' />
//                             </div>

//                             <div className="input-field col-md-6">
//                                 <label htmlFor="firstname">Phone Number</label>
//                                 <input type="text" className='input' placeholder='Enter Phone Number' />
//                             </div>
//                         </div>


//                         <div className="input-field p-2">
//                             <label htmlFor="firstname">Message</label>
//                             <textarea name="" id="" placeholder='Enter Phone Message'></textarea>
//                         </div>


//                         <div className="d-flex align-items-center justify-content-between p-2">
//                             <div className='d-flex align-items-center gap-2'>
//                                 <input type="checkbox" name="" id="" />
//                                 <small className="muted">I agree with Terms of Use and Privacy Policy</small>
//                             </div>
//                             <button className="button1">Send Message</button>
//                         </div>

//                     </form>
//                 </div>
//             </div>





//         </div>
        
//             <FAQ />
//             <Trial />
//     </div>
//   )
// }

// export default Support




import React from "react";
import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import Trial from "../components/Trial";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const inputVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const Support = () => {
  return (
    <motion.div
      className=""
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container2">
          <div className="d-flex flex-column flex-md-row gap-4 m-0 my-4">
            {/* Left Section - Welcome Text & Image */}
            <motion.div
              className="col d-flex flex-column gap-3 p-0"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h4>Welcome To Our Support Page!</h4>
              <small className="muted">
                We're here to help you with any problems you may be having with our product.
              </small>
              {/* Animated Image */}
              <motion.div
                className="image-support-box"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img src="../../Images/heroo.jpg" alt="" />
              </motion.div>
            </motion.div>
            {/* Right Section - Form */}
            <motion.div
              className="col-md-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <form action="" className="p-4 d-flex flex-column gap-3">
                <div className="m-0 gap-md-0 gap-3 row">
                  <motion.div
                    className="input-field col-md-6"
                    custom={1}
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" className="input" placeholder="Enter First Name" />
                  </motion.div>
                  <motion.div
                    className="input-field col-md-6"
                    custom={2}
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" className="input" placeholder="Enter Last Name" />
                  </motion.div>
                </div>
                <div className="row gap-md-0 gap-3">
                  <motion.div
                    className="input-field col-md-6"
                    custom={3}
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <label htmlFor="email">Email</label>
                    <input type="email" className="input" placeholder="Enter Email" />
                  </motion.div>
                  <motion.div
                    className="input-field col-md-6"
                    custom={4}
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" className="input" placeholder="Enter Phone Number" />
                  </motion.div>
                </div>
                <motion.div
                  className="input-field p-2"
                  custom={5}
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <label htmlFor="message">Message</label>
                  <textarea name="message" placeholder="Enter Message"></textarea>
                </motion.div>
                <motion.div
                  className="d-flex align-items-center justify-content-between p-2"
                  custom={6}
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="d-flex align-items-center gap-2">
                    <input type="checkbox" name="terms" id="terms" />
                    <small className="muted">I agree with Terms of Use and Privacy Policy</small>
                  </div>
                  {/* Animated Send Button */}
                  <motion.button
                    className="button1"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
      </div>

      
        <FAQ />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        <Trial />
      </motion.div>
    </motion.div>
  );
};

export default Support;
