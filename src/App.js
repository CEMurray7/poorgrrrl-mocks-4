import React, { Component } from 'react';
import Checkout from './Checkout';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
      <div className="App-intro">
      <Checkout
      name={'PITIPARTY EP'}
      description={'Six song EP'}
      amount={1} />
      </div>
      <p>FOUND <a href='https://parachute.bandcamp.com/album/pitiparti'> HERE </a>
      </p>
      </div>
    );
  }
}
