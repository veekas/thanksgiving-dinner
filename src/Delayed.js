import React, { Component } from 'react';

import Spinner from './Spinner';

class Delayed extends Component {
  state = {show : false};

  componentDidMount() {
    setTimeout(() => {
        this.setState({ show: true });
    }, this.props.waitBeforeShow);
  }

  render() {
      return this.state.show
        ? this.props.children
        : <Spinner />;
  }
}

export default Delayed;
