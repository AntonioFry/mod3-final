import React from 'react';

const Card = ({ name, img, description, species }) => {
  return (
    <div>
      <img src={img} alt={`${name} the ${species}`}/>
      <h3>{name}</h3>
      <p>Species: {species}</p>
      <p>{description}</p>
    </div>
  )
}

export default Card;