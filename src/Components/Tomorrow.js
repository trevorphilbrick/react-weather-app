import React, { Component } from "react";

export class Tomorrow extends Component {
 
  render() {
    return (
      <div className="tomorrow-container">
        <h3>Tomorrow</h3>
        <h4>{this.props.tomorrow.date}</h4>
        <p className="temp">
          {this.props.tomorrow.day.mintemp_f}&#176;/
          {this.props.tomorrow.day.maxtemp_f}&#176;
        </p >
      </div>
    );
  }
}

export default Tomorrow;
