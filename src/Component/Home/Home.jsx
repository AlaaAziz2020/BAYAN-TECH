import React from 'react'
import { Link } from 'react-router'
import './Home.css'

export default function Home() {
  return (
    <div>
    <section id="hero" class="hero section ">


      <img src="https://images.pexels.com/photos/4443160/pexels-photo-4443160.jpeg" alt="" data-aos="fade-in" />

      <div class="container">
        <h2 className='text-white' data-aos="fade-up" data-aos-delay="100">Learning Today,<br />Leading Tomorrow</h2>
        <p className='text-white' data-aos="fade-up" data-aos-delay="200">We are team of talented developers making front end websites </p>
        <div className='text-white' class="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
          <Link to="/" class="btn-get-started">Get Started</Link>
        </div>
      </div>

    </section>
    <section id="about" class="about section" href="/about">

      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-6 order-1 order-lg-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <img src="https://images.pexels.com/photos/8197528/pexels-photo-8197528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="img-fluid" alt="" />
          </div>

          <div class="col-lg-6 order-2 order-lg-1 content aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <h3>Voluptatem dignissimos provident quasi corporis</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i class="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i class="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
            </ul>
            <a href="#" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
          </div>

        </div>

      </div>

    </section>

    </div>
  )
}
