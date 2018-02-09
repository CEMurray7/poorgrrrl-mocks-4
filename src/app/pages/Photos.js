import React, { Component, PropTypes } from 'react';
import PhotoStyles from './PhotoStyles';

export default class PhotoPage extends Component {
  render() {
    return (
      <div>
      <h1>THIS IS THE TEST TO SEE IF THE
      ROUTER IS WORKING FOR THE STATIC PAGES</h1>
        <p>{this.props.text}</p>
        <a href='/'>GO HOME</a>
      </div>
    );
  }
}
