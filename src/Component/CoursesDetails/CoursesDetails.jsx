import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Loadar from '../Loadar/Loadar';
import './CoursesDetails.css';
import toast from 'react-hot-toast';

export default function CoursesDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchCourseDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://677c45ba4496848554c62090.mockapi.io/api/v1/courses/${id}`
      );
      setCourse(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching course details:', error);
      setLoading(false);
    }
  };
  const addCourseItem = async (courseId) => {
    try {
      const response = await addCourseItem(courseId);
      console.log(response); // Debug the response structure

      if (response?.createdAt) {
        toast.success('course added to cart!', {
          duration: 4000,
          position: 'top-left',
        });
      } else {
        toast.error('Failed to add course to cart.', {
          duration: 4000,
          position: 'top-left',
        });
      }
    } catch (error) {
      console.error('Error adding trainer to cart:', error);
      toast.error('An error occurred while adding the trainer to the cart.', {
        duration: 4000,
        position: 'top-left',
      });
    }
  };


  useEffect(() => {
    fetchCourseDetails();
  }, [id]);

  useEffect(() => {
    fetchCourseDetails();
  }, [id]);


  if (isLoading) {
    return <Loadar />;
  }

  if (!course) {
    return <div className="error">Course not found.</div>;
  }


  return (
    <div className="courses-details container mb-5">
      <div className="row mt-5">
        <div className="col-md-6 mt-5">
          <img
            src={course?.image || 'placeholder.jpg'}
            alt={course?.name || 'Course'}
            className="w-100"
          />
        </div>
        <div className="col-md-6 pt-5">
          <h1>{course.name}</h1>
          <p>{course.description?.slice(0, 300) || 'No description available.'}</p>
          <Link to={`/coursesdetails/${course.id}/${course.name}`} className="btn w-100 rounded-lg text-white bg-green-600 px-4" onClick={() => addCourseItem(course?.id)}>
            Subscribe
            </Link>
        </div>
      </div>
    </div>
  );
}
