import React from 'react';

const DonationCard = ({ name, donation }) => {
  return (
    <div>
      <p>{name} recently donated ${donation}</p>
    </div>
  )
}

export default DonationCard;