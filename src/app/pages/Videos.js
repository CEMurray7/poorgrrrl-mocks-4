import React, { Component, PropTypes } from 'react';

export default class VideosPage extends Component {
  render() {
    return(
      <div>
      <h1>THIS IS A TEST TO SEE IF THE ROUTER IS WORKING
      ON THE STATIC PAGES</h1>
      <p>{this.props.text}</p>
      <a href='/'>GO HOME!</a>
      </div>
    );
  }
}
