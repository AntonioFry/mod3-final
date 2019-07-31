import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Donations from '../Donations/Donations';
import Animals from '../Animals/Animals';
import { setAnimals, setError, setDonations } from '../actions';
import { connect } from 'react-redux';
import {fetchAnimals, fetchDonations} from '../apiCalls/apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    }
  }

  componentDidMount = async () => {
    try {
      const { setError, setAnimals, setDonations } = this.props
      await fetchAnimals(setError, setAnimals)
      await fetchDonations(setError, setDonations);
    } catch (error) {
      this.props.setError(error.message)
    }
  }


  render() {
    return (
      <main>
        <Form />
        <section className="lower-section">
          <Animals />
          <Donations />
        </section>
      </main>
    );
  }
}

const mapStateToProps = (store) => ({
  error: store.error
})

const mapDispatchToProps = (dispatch) => ({
  setAnimals: animals => dispatch(setAnimals(animals)),
  setError: error => dispatch(setError(error)),
  setDonations: donations => dispatch(setDonations(donations))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
