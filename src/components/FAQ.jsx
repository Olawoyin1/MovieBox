// import React, { useState } from 'react'

// const FAQ = () => {

//     const [open, setOpen] = useState(false)


//     const handleFaq = () => {
//         setOpen(!open)
//     }

//   return (
//     <div className='container2'>
//         <div className="my-3">
//             <div className="d-flex align-items-md-center align-items-start flex-column flex-md-row gap-3 justify-content-between">
//                 <div>
//                     <h5>Frequently Asked Questions</h5>
//                     <small className="muted">Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</small>
//                 </div>
//                 <button className="button1">Ask a Question</button>
//             </div>

//             <div className="faqs my-4 grid1 row m-0 row-cols-1 row-cols-lg-2">
//                 <div className="faq-item">
//                     <div className="faq-head d-flex align-items-center justify-content-between ">
//                         <div className='d-flex align-items-center gap-3'>
//                             <div className="num d-flex align-items-center justify-content-center">01</div>
//                             <p>Question One</p>
//                         </div>
//                         <button onClick={handleFaq} className='faq-btn'>+</button>
//                     </div>
//                     <div className="faq-answer mt-2 mb-3">
//                     {
//                         open ? (
//                             <small className="muted">StreamVibe is a streaming service that allows you to watch movies and shows on demand.</small>
//                         ): null
//                     }
//                     </div>
//                 </div>
//                 <div className="faq-item col">
//                     <div className="faq-head d-flex align-items-center gap-3">
//                         <div className="num d-flex align-items-center justify-content-center">01</div>
//                         <p>Question One</p>
//                     </div>
//                     <div className="faq-answer mt-2 mb-3">
//                         <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum totam vitae adipisci eius nostrum aperiam facilis. Deserunt perspiciatis consectetur voluptas!</small>
//                     </div>
//                 </div>
//                 <div className="faq-item">
//                     <div className="faq-head d-flex align-items-center gap-3">
//                         <div className="num d-flex align-items-center justify-content-center">01</div>
//                         <p>Question One</p>
//                     </div>
//                     <div className="faq-answer mt-2 mb-3">
//                         <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum totam vitae adipisci eius nostrum aperiam facilis. Deserunt perspiciatis consectetur voluptas!</small>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default FAQ



// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const faqs = [
//   {
//     id: 1,
//     question: "What is StreamVibe?",
//     answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
//   },
//   {
//     id: 2,
//     question: "How much does StreamVibe cost?",
//     answer: "StreamVibe offers various subscription plans. Check our pricing page for more details.",
//   },
//   {
//     id: 3,
//     question: "Can I cancel anytime?",
//     answer: "Yes! You can cancel your subscription at any time with no extra fees.",
//   },
//   {
//     id: 4,
//     question: "Can I cancel anytime?",
//     answer: "Yes! You can cancel your subscription at any time with no extra fees.",
//   },
//   {
//     id: 5,
//     question: "Can I cancel anytime?",
//     answer: "Yes! You can cancel your subscription at any time with no extra fees.",
//   },
//   {
//     id: 6,
//     question: "Can I cancel anytime?",
//     answer: "Yes! You can cancel your subscription at any time with no extra fees.",
//   },
//   {
//     id: 7,
//     question: "Can I cancel anytime?",
//     answer: "Yes! You can cancel your subscription at any time with no extra fees.",
//   },
//   {
//     id: 8,
//     question: "Can I cancel anytime?",
//     answer: "Yes! You can cancel your subscription at any time with no extra fees.",
//   },
// ];

// const FAQ = () => {
//   const [openFAQ, setOpenFAQ] = useState(null);

//   const handleFaqToggle = (id) => {
//     setOpenFAQ(openFAQ === id ? null : id);
//   };

//   return (
//     <div className="container2">
//       <div className="my-3">
//         <div className="d-flex align-items-md-center align-items-start flex-column flex-md-row gap-3 justify-content-between">
//           <div>
//             <h5>Frequently Asked Questions</h5>
//             <small className="muted">
//               Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
//             </small>
//           </div>
//           <button className="button1">Ask a Question</button>
//         </div>

//         <div className="faqs my-4 grid1 row m-0 row-cols-1 row-cols-lg-2">
//           {faqs.map((faq) => (
//             <div key={faq.id} className="faq-item">
//               <div className="faq-head d-flex align-items-center justify-content-between">
//                 <div className="d-flex align-items-center gap-3">
//                   <div className="num d-flex align-items-center justify-content-center">
//                     0{faq.id}
//                   </div>
//                   <p>{faq.question}</p>
//                 </div>
//                 <button onClick={() => handleFaqToggle(faq.id)} className="faq-btn">
//                   {openFAQ === faq.id ? "−" : "+"}
//                 </button>
//               </div>

//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: openFAQ === faq.id ? "auto" : 0, opacity: openFAQ === faq.id ? 1 : 0 }}
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//                 className="faq-answer mt-2  overflow-hidden"
//               >
//                 {openFAQ === faq.id && <small className="muted">{faq.answer}</small>}
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;








// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const faqs = [
//   {
//     id: 1,
//     question: "What is StreamVibe?",
//     answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
//   },
//   {
//     id: 2,
//     question: "How much does StreamVibe cost?",
//     answer: "StreamVibe offers various subscription plans. Check our pricing page for more details.",
//   },
//   {
//     id: 3,
//     question: "Can I cancel anytime?",
//     answer: "Yes! You can cancel your subscription at any time with no extra fees.",
//   },
//   {
//     id: 4,
//     question: "Can I cancel anytime?",
//     answer: "Yes! You can cancel your subscription at any time with no extra fees.",
//   },
//   {
//     id: 5,
//     question: "Can I cancel anytime?",
//     answer: "Yes! You can cancel your subscription at any time with no extra fees.",
//   },
//   {
//     id: 6,
//     question: "Can I cancel anytime?",
//     answer: "Yes! You can cancel your subscription at any time with no extra fees.",
//   },
//   {
//     id: 7,
//     question: "Can I cancel anytime?",
//     answer: "Yes! You can cancel your subscription at any time with no extra fees.",
//   },
//   {
//     id: 8,
//     question: "Can I cancel anytime?",
//     answer: "Yes! You can cancel your subscription at any time with no extra fees.",
//   },
// ];

// const FAQ = () => {
//   const [openFAQ, setOpenFAQ] = useState(null);

//   const handleFaqToggle = (id) => {
//     setOpenFAQ(openFAQ === id ? null : id);
//   };

//   return (
//     <div className="container2">
//       <div className="my-3 py-4">
//         <div className="d-flex align-items-md-center align-items-start flex-column flex-md-row gap-3 justify-content-between">
//           <div>
//             <h5>Frequently Asked Questions</h5>
//             <small className="muted">
//               Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
//             </small>
//           </div>
//           <button className="button1">Ask a Question</button>
//         </div>

//         <div className="faqs my-4 row m-0 row-cols-1 row-cols-lg-2">
//           {faqs.map((faq) => (
//             <div key={faq.id} className="faq-item">
//               <div className="faq-head d-flex align-items-center justify-content-between">
//                 <div className="d-flex align-items-center gap-3">
//                   <div className="num d-flex align-items-center justify-content-center">
//                     0{faq.id}
//                   </div>
//                   <p>{faq.question}</p>
//                 </div>
//                 <button onClick={() => handleFaqToggle(faq.id)} className="faq-btn">
//                   {openFAQ === faq.id ? "−" : "+"}
//                 </button>
//               </div>

//               {/* Smooth Opening and Closing */}
//               <AnimatePresence initial={false}>
//                 {openFAQ === faq.id && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="faq-answer"
//                   >
//                     <small className="muted">{faq.answer}</small>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;






import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What is StreamVibe?",
    answer: "StreamVibe is an on-demand streaming service offering movies and shows anytime, anywhere.",
  },
  {
    id: 2,
    question: "How much does a subscription cost?",
    answer: "We have various subscription plans to suit your needs. Check our pricing page for details.",
  },
  {
    id: 3,
    question: "What devices can I stream on?",
    answer: "You can stream on smartphones, tablets, smart TVs, laptops, gaming consoles, and VR headsets.",
  },
  {
    id: 4,
    question: "Can I download movies and shows?",
    answer: "Yes! You can download content for offline viewing on supported devices.",
  },
  {
    id: 5,
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 7-day free trial for new users to explore our platform.",
  },
  {
    id: 6,
    question: "Can I share my account with family?",
    answer: "Our premium plan allows multiple devices. Check our plans for more details.",
  },
  {
    id: 7,
    question: "How do I cancel my subscription?",
    answer: "You can cancel anytime through your account settings without extra charges.",
  },
  {
    id: 8,
    question: "Do you offer customer support?",
    answer: "Yes! Our 24/7 customer support team is ready to assist you anytime.",
  },
];

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleFaqToggle = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <motion.div
      className="container2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="my-3 py-4">
        <div className="d-flex align-items-md-center align-items-start flex-column flex-md-row gap-3 justify-content-between">
          <div>
            <h5>Frequently Asked Questions</h5>
            <small className="muted">
              Got questions? We've got answers! Check out our FAQ section to find answers to common questions about StreamVibe.
            </small>
          </div>
          <motion.button
            className="button1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Ask a Question
          </motion.button>
        </div>

        <div className="faqs my-4 row m-0 row-cols-1 row-cols-lg-2">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: faq.id * 0.05 }}
            >
              <div className="faq-head d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="num d-flex align-items-center justify-content-center">
                    0{faq.id}
                  </div>
                  <p className="fw-bold">{faq.question}</p>
                </div>
                <motion.button
                  onClick={() => handleFaqToggle(faq.id)}
                  className="faq-btn"
                  whileTap={{ scale: 0.9 }}
                >
                  {openFAQ === faq.id ? "−" : "+"}
                </motion.button>
              </div>

              {/* Smooth Expand/Collapse Animation */}
              <AnimatePresence initial={false}>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="faq-answer"
                  >
                    <small className="muted">{faq.answer}</small>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
