import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Donations from '../Donations/Donations';
import Animals from '../Animals/Animals';
import { setAnimals, setError, setDonations, isLoading } from '../actions';
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
      const { setError, setAnimals, setDonations, isLoading } = this.props
      isLoading("../loading.gif")
      await fetchAnimals(setError, setAnimals)
      await fetchDonations(setError, setDonations);
      isLoading("")
    } catch (error) {
      this.props.setError(error.message)
    }
  }


  render() {
    return (
      <main>
        <Form />
        {this.props.error !== "" && <h2>{this.props.error}</h2>}
        {this.props.loading !== "" && <img src=(({this.props.loading})) alt="loading"/>}
        {/* {this.props.loading === "" && */}
        {this.props.error === "" && 
          <section className="lower-section">
            <Animals />
            <Donations />
          </section>
        }
        {/* } */}
      </main>
    );
  }
}

const mapStateToProps = (store) => ({
  error: store.error,
  loading: store.loading
})

const mapDispatchToProps = (dispatch) => ({
  setAnimals: animals => dispatch(setAnimals(animals)),
  setError: error => dispatch(setError(error)),
  setDonations: donations => dispatch(setDonations(donations)),
  isLoading: loading => dispatch(isLoading(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
