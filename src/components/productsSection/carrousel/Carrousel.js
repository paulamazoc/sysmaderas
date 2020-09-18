import React from "react";
import Slider from "react-slick";
import Card from "../../../shared/Card";
import './carrousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SLIDES_TO_SHOW = 3;

const Carrousel = ({ cards }) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: cards.length >= SLIDES_TO_SHOW ? SLIDES_TO_SHOW : cards.length,
        responsive: [
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,         
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1,
                    centerPadding: 0,
                }
            }
        ],
    };
  
    
    if(cards.length > 0) {
        return (
            <div className="carrousel">
                <Slider {...settings}>
                    {cards.map(card => (<Card key={card.id} card={card} />))}
                </Slider>
            </div>
        )
    } else {
        return null;
    }

};

export default Carrousel;