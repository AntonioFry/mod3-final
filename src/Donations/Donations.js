import React from 'react'
import DonationCard from '../Card/DonationCard';
import { connect } from 'react-redux';
import './Donations.css';

const Donations = ({ allDonations }) => {
  const cards = allDonations.map(donate => {
    return (
      <DonationCard
        name={donate.name}
        id={donate.id}
        donation={donate.donation}
        key={donate.id}
      />
    )
  })
  
  return  (
    <section className="donations-section">
      <h2>Recent Donations</h2>
      {cards}
    </section>
  )
}

const mapStatetoProps = (store) => ({
  allDonations: store.donations
})

export default connect(mapStatetoProps)(Donations);