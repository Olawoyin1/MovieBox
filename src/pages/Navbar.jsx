import React from 'react'
import { GoBell } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
        <div className="container2 d-flex align-items-center justify-content-between">
            <div className="logo">
                <h5>MovieBox</h5>
            </div>
            <nav className="nav">
                <ul className='navbar'>
                    <li><a className='nav-link' href="#home">Home</a></li>
                    <li><a className='nav-link' href="#movies">Movies & Shows</a></li>
                    <li><a className='nav-link' href="#supports">Supports</a></li>
                    <li><a className='nav-link' href="#subscriptions">Subscriptions</a></li>
                </ul>
            </nav>
            <div className="icons d-flex align-items-center gap-2">
                <CiSearch />
                <GoBell />
            </div>
        </div>
    </div>
  )
}

export default Navbar