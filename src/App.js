import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

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

export default App;
