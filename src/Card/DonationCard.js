import React from 'react';
import './DonationCard.css';

const DonationCard = ({ name, donation }) => {
  return (
    <div className="donation-card">
      <p>{name} recently donated ${donation}</p>
    </div>
  )
}

export default DonationCard;