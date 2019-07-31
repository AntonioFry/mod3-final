import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Donations from './Donations';
import Animals from './Animals';
import { setAnimals } from './actions';
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
      console.log(result);

    } catch (error) {
      this.setState({ error })
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
  setAnimals: animals => dispatch(setAnimals(animals))
})

export default connect()(App);
