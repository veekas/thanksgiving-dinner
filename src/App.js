import React, { Component } from 'react';

import Gravy from './foods/Gravy';
import MashedPotatoes from './foods/MashedPotatoes';
import Pie from './foods/Pie';
import Stuffing from './foods/Stuffing';
import Turkey from './foods/Turkey';

import './App.css';

class App extends Component {
  state = {
    showCourse1: true,
    showCourse2: false,
    showCourse3: false,
  }

  handleClick = (course) => {
    const base = {
      showCourse1: false,
      showCourse2: false,
      showCourse3: false,
    }

    const courseKey = `showCourse${course}`;

    this.setState({ ...base, [courseKey]: true });
  }

  render() {
    return (
      <div className="App">

        <header className="header">Thanksgiving Dinner</header>

        <div className="plate-contents">
          {this.state.showCourse1 ? <Turkey /> : null }
          {this.state.showCourse1 ? <Stuffing /> : null }
          {this.state.showCourse2 ? <MashedPotatoes /> : null }
          {this.state.showCourse2 ? <Gravy /> : null }
          {this.state.showCourse3 ? <Pie /> : null }
        </div>

        <div className="buttons">
          <button onClick={() => this.handleClick(1)}>
            Main Course
          </button>
          <button onClick={() => this.handleClick(2)}>
            Sides
          </button>
          <button onClick={() => this.handleClick(3)}>
            Dessert
          </button>
        </div>

        <div className="plate" />
      </div>
    );
  }
}

export default App;
