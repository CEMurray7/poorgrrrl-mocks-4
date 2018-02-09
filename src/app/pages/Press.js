import React, { Component, PropTypes } from 'react';
import PressStyles from './PressStyles';

export default class PhotosPage extends Component {
  render() {
    return(
      <div>
      <h1>THIS IS A TEST THAT THE ROUTER IS WORKING
      FOR ALL OF THE STATIC PAGES PRESSSSSSS</h1>
      <p>{this.props.text}</p>
      <a href='/'>GO HOME!</a>
      </div>
    );
  }
}
