import { Component } from 'react';

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
        : null;
  }
}

export default Delayed;
