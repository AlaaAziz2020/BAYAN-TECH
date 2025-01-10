import React from 'react'

import { Outlet } from 'react-router';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';
// import Home from '../Home/Home';


export default function L() {
  return (
    <div>
        <Navbar />
        <div className='container'>
        <Outlet/>

        </div>
        <Footer />
    </div>
  )
}
