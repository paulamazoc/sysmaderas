import React from 'react';
import './card.css';

const Card = ({card}) => {
    return(
        <figure className="card">
            <img src={card.image} alt={card.title}/>
            <figcaption>
                <h3>{card.title}</h3>
            </figcaption>
        </figure>
    );
}

export default Card;
