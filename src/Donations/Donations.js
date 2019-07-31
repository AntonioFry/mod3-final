import React from 'react'
import DonationCard from '../Card/DonationCard';
import { connect } from 'react-redux';

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
    <section>
      {cards}
    </section>
  )
}

const mapStatetoProps = (store) => ({
  allDonations: store.donations
})

export default connect(mapStatetoProps)(Donations);