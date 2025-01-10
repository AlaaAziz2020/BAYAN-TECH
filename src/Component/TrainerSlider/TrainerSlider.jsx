import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import NotFound from "../NotFound/NotFound";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "./TrainerSlider.css"; // Your custom styles
import { Link } from "react-router";

export default function TrainerSlider() {
    const [trainers, setTrainers] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    async function getTrainers() {
        try {
            const { data } = await axios.get('https://677c45ba4496848554c62090.mockapi.io/api/v1/trainers');
            setTrainers(data);
        } catch (error) {
            console.error("Error fetching trainers:", error);
            setTrainers([]);
        }
    }

    useEffect(() => {
        getTrainers();
    }, []);

    return (
        <>
        <div className="trainers mt-5">
            <div className="container">
            <div className="row">
            <div className="col-md-12">
      <h3 className="pb-3 pt-3">Trainers</h3>

        {trainers ? (
                <Slider {...settings} arrows={false}>
                    {trainers.map((trainer) => (
                        <div className="t" key={trainer.id}>
                                 <Link to={`/trainerdetails/${trainer.id}/${trainer.name}`}>

                            <img className="w-full h-80 img-fluid" src={trainer.image || 'placeholder.jpg'} alt={trainer.name || 'Trainer'} />
                            <h6 className="pt-3 card-title">{trainer.name || 'Unknown Trainer'}</h6>
                            <p className="text-dark pt-3">{trainer.details}</p>
                            </Link>
                        </div>
                    ))}
                </Slider>
            ) : (
                <NotFound />
            )}
        </div>
          </div >
          </div>
          </div>
        </>
    );
}
