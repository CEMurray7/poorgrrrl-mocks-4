import React, { Component, PropTypes } from 'react';

export default class Static extends Component {
  render() {
    const { isMobile } = this.props;

    return (
      <div>
      <h1>IS THIS ROUTING RIGHT{isMobile ? 'mobile' : 'desktop'}</h1>
      </div>
    );
  }
}

Static.proptypes = {
  isMobile:PropTypes.bool.isRequired
};
