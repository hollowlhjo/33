import React, { Component } from 'react';

class MillimetersToCentimeters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      millimeters: '',
      centimeters: '',
    };
  }

  handleMillimetersChange = (e) => {
    const millimeters = e.target.value;
    const centimeters = millimeters / 10;
    this.setState({ millimeters, centimeters });
  };

  render() {
    return (
      <div>
        <h2>Міліметри в сантиметри</h2>
        <input
          type="number"
          placeholder="Міліметри"
          value={this.state.millimeters}
          onChange={this.handleMillimetersChange}
        />
        <input type="text" value={this.state.centimeters} readOnly />
        {this.state.centimeters >= 100 && <p>Довжина більша за 1 метр.</p>}
      </div>
    );
  }
}

export default MillimetersToCentimeters;