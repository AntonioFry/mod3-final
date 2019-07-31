import React from 'react';
import Card from './Card';

const Animals = ({ animals }) => {
  const animalCards = animals.map(animal => {
    return (
      <Card />
    )
  })
  return (
    <section>

    </section>
  )
}

const mapStateToProps = (store) => ({
  animals: store.animals
})

export default Animals;