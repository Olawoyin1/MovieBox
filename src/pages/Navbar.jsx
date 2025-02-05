// import React from 'react'
// import { GoBell } from "react-icons/go";
// import { IoSearchOutline } from "react-icons/io5";
// import { Link } from 'react-router-dom';
// import { CiMenuFries } from "react-icons/ci";

// const Navbar = () => {
//   return (
//     <div>
//         <div className="container2 header d-flex align-items-center justify-content-between">
//             <div className="logo">
//                 <Link to="/">
//                 <h5>MovieBox</h5>
//                 </Link>
//             </div>
//             <nav className="nav d-none d-md-flex">
//                 <ul className='navbar'>
//                     <li><Link className='nav-link' to="/">Home</Link></li>
//                     <li><Link className='nav-link' to="/movies">Movies & Shows</Link></li>
//                     <li><Link className='nav-link' to="/support">Supports</Link></li>
//                     <li><Link className='nav-link' to="/subscriptions">Subscriptions</Link></li>
//                 </ul>
//             </nav>
//             <div className="icons d-md-flex d-none align-items-center gap-2">
//                 <IoSearchOutline size={20} />
//                 <GoBell size={20} />
//             </div>
//             <CiMenuFries size={24} className='d-flex d-md-none'/>
//         </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from "react";
import { GoBell } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="navbar-container">
      <div className="container2 header d-flex align-items-center justify-content-between">
        {/* Logo */}
        <motion.div
          className="logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link to="/">
            <h5>MovieBox</h5>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="nav d-none d-md-flex">
          <ul className="navbar p-0">
            {["Home", "Movies", "Support", "Subscriptions"].map(
              (item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link className="nav-link" to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                    {item}
                  </Link>
                </motion.li>
              )
            )}
          </ul>
        </nav>

        {/* Icons */}
        <div className="icons p-0 d-md-flex d-none align-items-center gap-2">
          <motion.div whileHover={{ scale: 1.2 }}>
            <IoSearchOutline size={20} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <GoBell size={20} />
          </motion.div>
        </div>

        {/* Mobile Menu Icon */}
        <motion.div
          className="menu-icon d-flex d-md-none"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <IoClose size={28} /> : <CiMenuFries size={28} />}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ul className="mobile-navbar">
              {["Home", "Movies", "Support", "Subscriptions"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    onClick={toggleMenu}
                  >
                    <Link className="mobile-nav-link" to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                      {item}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
