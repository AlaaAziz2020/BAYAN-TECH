import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router";
import axios from "axios";
import "./Home.css";
import TrainerSlider from "../TrainerSlider/TrainerSlider";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const {data} = await axios.get('https://677c45ba4496848554c62090.mockapi.io/api/v1/courses');
        setCourses(data.slice(0, 10)); // Limit to 10 courses
        setLoading(false);
        Navigate('/coursesdetails')
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div id="hero" className="hero section">
        <img
          src="https://images.pexels.com/photos/4443160/pexels-photo-4443160.jpeg"
          alt=""
          data-aos="fade-in"
        />
        <div className="container">
          <h2 className="text-white" data-aos="fade-up" data-aos-delay="100">
            Learning Today,<br />Leading Tomorrow
          </h2>
          <p className="text-white" data-aos="fade-up" data-aos-delay="200">
            We are a team of talented developers making front-end websites
          </p>
          <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
            <Link to="/" className="btn-get-started">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about section" >
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="https://images.pexels.com/photos/8197528/pexels-photo-8197528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="img-fluid"
                alt=""
              />
            </div>
            <div
              className="col-lg-6 order-2 order-lg-1 content"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>About Us</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </span>
                </li>
              </ul>
              <Link to="/" className="btn ">
 Read More          </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div id="courses" className="courses  mt-5 mb-5" to='/'>
        <div className="container">
        <div className="row ">
      <h3>Courses</h3>

  {courses.map((course) => (
   <div className="col-lg-4 col-md-6 mb-4" key={course.id}>
   <div className="card ">
     <Link to={`/coursesdetails/${course.id}/${course.name}`}>
       <div className="card-body">
         <img src={course.image} alt={course?.name} className="w-100" />
         <h5 className="card-title pt-3">{course.name}</h5>
         <p className="card-text text-dark">
           {/* {course.body?.substring(0, 100) || "No description available"}... */}
           {course?.description.slice(0, 120)}
         </p>
       </div>
     </Link>
     <Link to={`/coursesdetails/${course.id}/${course.name}`} className="btn mb-3">
       View Details
     </Link>
   </div>
 </div>
 
    
  ))}
</div>
        </div>
 

    </div>
          {/* Trainer Section */}
          
            <TrainerSlider />
            {/*Contact Section */}

    <section id="contact" className="contact section mt-5">

      

      <div className="container" data-aos="fade-up" data-aos-delay="100">
      <h3 className="pb-5 pt-3 m-auto">Contact</h3>

        <div className="row gy-4">

          <div className="col-lg-4">
      
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="fa fa-location flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>A108 A Street, Cairo</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="fa fa-phone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 23456789</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <i className="fa fa-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">

                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                </div>

                <div className="col-md-6 ">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div>

    </section>
    </div>
  );
}
