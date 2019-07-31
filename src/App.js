import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Donations from './Donations';
import Animals from './Animals';
import { setAnimals, setError } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    }
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/rescue-animals`)
      const result = await response.json();
      this.props.setAnimals(result);

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
