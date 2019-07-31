import React from 'react';
import Card from '../Card/Card';
import {connect} from 'react-redux';

const Animals = ({ animals }) => {
  const animalCards = animals.map(animal => {
    return (
      <Card
        name={animal.name}
        species={animal.species}
        id={animal.id}
        description={animal.description}
        img={animal.img}
        key={animal.id}
      />
    )
  })
  return (
    <section>
      {animalCards};
    </section>
  )
}

const mapStateToProps = (store) => ({
  animals: store.animals
})

export default connect(mapStateToProps)(Animals);