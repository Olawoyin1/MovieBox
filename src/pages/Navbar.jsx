import React from 'react'
import { GoBell } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
        <div className="container2 header d-flex align-items-center justify-content-between">
            <div className="logo">
                <h5>MovieBox</h5>
            </div>
            <nav className="nav d-none d-md-flex">
                <ul className='navbar'>
                    <li><Link className='nav-link' to="/">Home</Link></li>
                    <li><Link className='nav-link' to="/movies">Movies & Shows</Link></li>
                    <li><Link className='nav-link' to="/support">Supports</Link></li>
                    <li><Link className='nav-link' to="/subscriptions">Subscriptions</Link></li>
                </ul>
            </nav>
            <div className="icons d-md-flex d-none align-items-center gap-2">
                <IoSearchOutline size={20} />
                <GoBell size={20} />
            </div>
            <CiMenuFries size={24} className='d-flex d-md-none'/>
        </div>
    </div>
  )
}

export default Navbar