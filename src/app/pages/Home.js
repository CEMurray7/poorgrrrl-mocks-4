import React, { Component, PropTypes } from 'react';
import HomeStyles from './HomeStyles';

export default class HomePage extends Component {
  render() {
    return (
      <div>
      <h1> CHECKOUTTHEHOMEPAGESTYLESSSSSDOES THIS WORK?</h1>
      <p>{this.props.text}</p>
      <a href='/'>GO HOME</a>
      </div>
    );
  }
}
