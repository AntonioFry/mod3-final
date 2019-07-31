import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Donations from './Donations';
import Animals from './Animals';
import { setAnimals, setError } from './actions';
import { connect } from 'react-redux';
import {fetchAnimals, fetchDonations} from './apiCalls';

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
        <Animals />
        <Donations />
      </main>
    );
  }
}

const mapStateToProps = (store) => ({
  error: store.error
})

const mapDispatchToProps = (dispatch) => ({
  setAnimals: animals => dispatch(setAnimals(animals)),
  setError: error => dispatch(setError(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
