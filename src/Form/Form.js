import React, { Component } from 'react';
import { addDonation, setError } from '../actions';
import { connect } from 'react-redux';
import { postDonation } from '../apiCalls/apiCalls';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      nameValue: '',
      donationValue: '',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newDonation = { id: Date.now(), name: this.state.nameValue, donation: this.state.donationValue };
    this.props.addDonation(newDonation);
    postDonation(newDonation);
  }

  render() {
    return (
      <header>
        <h1>Animal Rescue</h1>
        <form>
          <input
            placeholder="name"
            name="nameValue"
            value={this.state.nameValue}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            placeholder="donation"
            name="donationValue"
            value={this.state.donationValue}
            onChange={(e) => this.handleChange(e)}
          />
          <button onClick={(e) => this.handleSubmit(e)}>Donate!</button>
        </form>
      </header>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDonation: donation => dispatch(addDonation(donation)),
  setError: error => dispatch(setError(error))
})

export default connect(null, mapDispatchToProps)(Form);