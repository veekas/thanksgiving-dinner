import React, { Component, lazy, Suspense } from 'react';

import Spinner from './Spinner';


import importWithDelay from './importWithDelay';
import './App.css';

// importWithDelay and the delay amount is only for this demo
// the actual syntax is much shorter, e.g.
// const Gravy = lazy(() => import('./foods/Gravy'));
const Gravy = lazy(() => importWithDelay(import('./foods/Gravy'), 2000));
const MashedPotatoes = lazy(() => importWithDelay(import('./foods/MashedPotatoes'), 1500));
const Pie = lazy(() => importWithDelay(import('./foods/Pie'), 500));
const Stuffing = lazy(() => importWithDelay(import('./foods/Stuffing'), 1800));
const Turkey = lazy(() => importWithDelay(import('./foods/Turkey'), 1200));

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
    const { showCourse1, showCourse2, showCourse3 } = this.state;

    return (
      <div className="App">

        <header className="header">Thanksgiving Dinner</header>

        <div className="plate-contents">
          <Suspense fallback={<Spinner />}>
            {showCourse1 ? <Turkey /> : null}
            {showCourse1 ? <Stuffing /> : null}
            {showCourse2 ? <MashedPotatoes /> : null}
            {showCourse2 ? <Gravy /> : null }
            {showCourse3 ? <Pie /> : null}
          </Suspense>
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
