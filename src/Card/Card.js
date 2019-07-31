import React from 'react';
import './Card.css';

const Card = ({ name, img, description, species }) => {
  return (
    <div className="animal-card">
      <img className="animal-image" src={img} alt={`${name} the ${species}`}/>
      <h3>{name}</h3>
      <p>Species: {species}</p>
      <p>{description}</p>
    </div>
  )
}

export default Card;