import React, { Component } from 'react';

class CentimetersToMillimeters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centimeters: '',
      millimeters: '',
    };
  }

  handleCentimetersChange = (e) => {
    const centimeters = e.target.value;
    const millimeters = centimeters * 10;
    this.setState({ centimeters, millimeters });
  };

  render() {
    return (
      <div>
        <h2>Сантиметри в міліметри</h2>
        <input
          type="number"
          placeholder="Сантиметри"
          value={this.state.centimeters}
          onChange={this.handleCentimetersChange}
        />
        <input type="text" value={this.state.millimeters} readOnly />
        {this.state.centimeters >= 100 && <p>Довжина більша за 1 метр.</p>}
      </div>
    );
  }
}

export default CentimetersToMillimeters;