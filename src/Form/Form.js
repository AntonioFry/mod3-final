import React, { Component } from 'react';
import { addDonation, setError } from '../actions';
import { connect } from 'react-redux';
import { postDonation } from '../apiCalls/apiCalls';
import './Form.css';

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
    const newDonation = { id: Date.now(), name: this.state.nameValue, donation: parseInt(this.state.donationValue) };
    this.props.addDonation(newDonation);
    postDonation(this.props.setError, newDonation);
  }

  render() {
    return (
      <header>
        <div className="header-content">
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
        </div>
      </header>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDonation: donation => dispatch(addDonation(donation)),
  setError: error => dispatch(setError(error))
})

export default connect(null, mapDispatchToProps)(Form);