import React, { Component } from "react";

export class DayAfter extends Component {
  render() {
    return (
      <div className="day-after-container">
        <h3>Day After</h3>
        <h4>{this.props.dayAfter.date}</h4>
        <p className="temp">
          {this.props.dayAfter.day.mintemp_f}&#176;/
          {this.props.dayAfter.day.maxtemp_f}&#176;
        </p>
      </div>
    );
  }
}

export default DayAfter;
