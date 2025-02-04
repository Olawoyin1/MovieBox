import React from 'react'
import { Link } from 'react-router-dom'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='footer py-5'>
        <div className="container2">
            <nav className='grid2'>
                <ul className='d-flex flex-column p-0 gap-2'>
                    <li className='fw-bold'>Home</li>
                    <li><Link className='nav-link' to="/">Categories</Link></li>
                    <li><Link className='nav-link' to="/">Devices</Link></li>
                    <li><Link className='nav-link' to="/subscriptions">Pricing</Link></li>
                    <li><Link className='nav-link' to="/">FAQ</Link></li>
                </ul>
                
                <ul className='d-flex flex-column p-0 gap-2'>
                    <li className='fw-bold'>Movies</li>
                    <li><Link className='nav-link' to="/movies">Gernes</Link></li>
                    <li><Link className='nav-link' to="/movies">Trending</Link></li>
                    <li><Link className='nav-link' to="/movies">New Release</Link></li>
                    <li><Link className='nav-link' to="/movies">Popular</Link></li>
                </ul>

                <ul className='d-flex flex-column p-0 gap-2'>
                    <li className='fw-bold'>Shows</li>
                    <li><Link className='nav-link' to="/movies">Gernes</Link></li>
                    <li><Link className='nav-link' to="/movies">Trending</Link></li>
                    <li><Link className='nav-link' to="/movies">New Release</Link></li>
                    <li><Link className='nav-link' to="/movies">Popular</Link></li>
                </ul>
                
                <ul className='d-flex p-0 flex-column gap-2'>
                    <li className='fw-bold'>Support</li>
                    <li><a className='nav-link' href="/">Contact Us</a></li>
                </ul>

                <ul className='d-flex p-0 flex-column gap-2'>
                    <li className='fw-bold'>Subscription</li>
                    <li><Link className='nav-link' to="/subscriptions">Plans</Link></li>
                    <li><Link className='nav-link' to="/subscriptions">Features</Link></li>
                </ul>

                <ul className='d-flex p-0 flex-column gap-2'    >
                    <li className='fw-bold'>Connect With Us</li>
                    <div className='d-flex gap-3 align-items-center'>
                        <li><a className='nav-link button2 d-flex align-items-center justify-content-center bg-dark' href="#li"><FaXTwitter /></a></li>
                        <li><a className='nav-link button2 d-flex align-items-center justify-content-center bg-dark' href="#li"><FaInstagram /></a></li>
                        <li><a className='nav-link button2 d-flex align-items-center justify-content-center bg-dark' href="#li"><IoLogoLinkedin /></a></li>
                    </div>
                </ul>

            </nav>
        </div>
    </div>
  )
}

export default Footer