import React, { Component } from 'react';
import CentimetersToMillimeters from './Cantimeters';
import MillimetersToCentimeters from './Milimeters';

class App extends Component {
  render() {
    return (
      <div>
        <CentimetersToMillimeters />
        <MillimetersToCentimeters />
      </div>
    );
  }
}

export default App;