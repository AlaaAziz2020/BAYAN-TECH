import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Slider from "react-slick";
// import '../Course/Coursescourse.css'
import '../TrainerDetails/TrainerDetails.css'
import Loadar from '../Loadar/Loadar';



export default function TrainerDetails() {
  const { id, category } = useParams();
  const [trainer, setTrainers] = useState(null);
  const [isLoading, setLoading] = useState(true);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const getTrainers = async () => {
    try {
      const { data } = await axios.get(
        `https://677c45ba4496848554c62090.mockapi.io/api/v1/trainers/${id}`
      );
      setTrainers(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product trainer:', error);
      setLoading(false);
    }
  };



  const addTrainerItem = async (trainerId) => {
    try {
      const response = await addTrainerItem(trainerId);
      console.log(response); // Debug the response structure

      if (response?.createdAt) {
        toast.success('trainer added to cart!', {
          duration: 4000,
          position: 'top-left',
        });
      } else {
        toast.error('Failed to add trainer to cart.', {
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
    getTrainers();
  }, [id]);


  return (
    <div className="trainers container ">
      {isLoading ? (
        <Loadar />
      ) : (
        <div className="row mt-5 ">
          <div className="col-md-6 mt-5">
            <div>
              {/* <Slider {...settings}>
              {Array.isArray(course?.images) ? (
  course.images.map((src, index) => (
    <img src={src} key={index} className="" alt="Product Image" />
  ))
) : (
  <p>No images available</p>
)}


              </Slider> */}
              </div>
            <img 
              src={trainer?.image || 'placeholder.jpg'}
              alt={trainer?.name || 'Trainer'}
              className="w-100"
            />
          </div>
          <div className="col-md-6 mt-5">
            <h6 className='card-title' >{trainer?.name}</h6>
            <p className='coursesscourse-text text-dark '>{trainer?.details.slice(0,130)}</p>
            {/* <button
              className="btn btn-danger w-100 rounded-lg text-white bg-green-600 px-4"
              onClick={() => addCourseItem(course?.id)}
            >
              Subscribe
            </button> */}
            <Link to={`/trainerdetails/${trainer.id}/${trainer.name}`} className="btn w-100 rounded-lg text-white bg-green-600 px-4" onClick={() => addTrainerItem(trainer?.id)}>
            Subscribe
            </Link>
          </div>
        </div>
      )}

      {/* <div className="row mt-5">
        <h3>Related Products</h3>
        {relatedProducts.map((product) => (
          <div className="col-md-3" key={product.id}>
            <Link to={`/productcourse/${product.id}/${category}`}>
              <img
                src={product.images || 'placeholder.jpg'}
                alt={product.title || 'Product'}
                className="w-100"
              />
              <h4>{product.title}</h4>
              <p>{product.price} EGP</p>
            </Link>
          </div>
        ))}
      </div> */}
    </div>
  );
}
