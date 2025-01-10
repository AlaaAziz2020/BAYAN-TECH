import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">

          <Link href="index.html" className="logo d-flex align-items-center me-auto">
            {/* <img src="assets/img/logo.png" alt="" /> */}
            <h1 className="sitename">Bayan Tech</h1>
          </Link>

          <nav id="navmenu" className={`navmenu ${isMobileNavOpen ? 'mobile-nav-active' : ''}`}>
            <ul>
              <li><Link to="/home" className="active">Home</Link></li>
              <li><Link><ScrollLink to="about" smooth={true} duration={100}>About</ScrollLink></Link></li>
              <li><Link><ScrollLink to="courses" smooth={true} duration={100}>Courses</ScrollLink> </Link></li>
              <li><Link><ScrollLink to="trainers" smooth={true} duration={100}>Trainers</ScrollLink></Link></li>
              <li><Link><ScrollLink to="contact" smooth={true} duration={100}>Contact</ScrollLink></Link></li>
            </ul>
          </nav>

          <i
            className={`mobile-nav-toggle d-xl-none fa ${isMobileNavOpen ? 'fa-times' : 'fa-bars'}`}
            onClick={toggleMobileNav}
          ></i>

        </div>
      </header>
    </div>
  );
}
