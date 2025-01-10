import React from 'react'
import './Navbar.css'
import { Link } from 'react-router'
export default function Navbar() {
  return (
    <div>
     <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center">

      <Link  href="index.html" className="logo d-flex align-items-center me-auto">
       {/* <img src="assets/img/logo.png" alt="" />  */}
        <h1 className="sitename">Bayan Tech</h1>
      </Link >

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><Link to="/home" className="active">Home<br /></Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="/">Courses</Link></li>
          <li><Link href="/">Trainers</Link></li>

      
          <li><Link  href="/">Contact</Link ></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>


    </div>
  </header>
    </div>
  )
}
