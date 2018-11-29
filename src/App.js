import React, { Component } from 'react';

import Gravy from './foods/Gravy';
import MashedPotatoes from './foods/MashedPotatoes';
import Pie from './foods/Pie';
import Stuffing from './foods/Stuffing';
import Turkey from './foods/Turkey';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="header">Thanksgiving Dinner</header>

        <div className="plate-contents">
          <Turkey />
          <Stuffing />
          <MashedPotatoes />
          <Gravy />
          <Pie />
        </div>

        <div className="plate" />
      </div>
    );
  }
}

export default App;
