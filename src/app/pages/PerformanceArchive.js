import React, { Component, PropTypes } from 'react';
import PerformanceArchiveStyles from './PerformanceArchiveStyles';

export Default class PerformanceArchivePage extends Component {
  render() {
    return (
    <div>
    <h1>PERFORMACE TEST FOR ROUTER</h1>
    <p>{this.props.text}</p>
    <a href='/'>GO HOME</a>
    </div>
    );
  }
}
