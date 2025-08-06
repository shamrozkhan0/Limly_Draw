import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clients } from '../Constants';
import { div } from 'framer-motion/client';


const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        margin: 10,
    };

    return (
        <>
            <div className="client-main">
                <div className="container">
                    <h2>What People Say</h2>
                    <span>Quisque fermentum porta tincidunt. Interdum semper. Pellentesque facilisis augue mollis suscipit.</span>


                    <div className="client-lower">
                        <Slider {...settings}>
              {
                                clients.map(({ name, image, position, review, id }) => (
                                    <div className="">
                                    <div key={id} className="rev-col">
                                        <img src={image} alt="" />
                                        <p>{review}</p>
                                        <h3> {name} </h3>
                                        <h5> {position} </h5>
                                    </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>{/**container**/}
            </div>{/**main**/}
        </>
    )
}

export default Testimonials
