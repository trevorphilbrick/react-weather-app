import React, { Component } from "react";

export class HourlyTemp extends Component {

  render() {
    return (
      <div className="hourly-temp">
        <h1>Hourly Forecast</h1>
        <div className="hourly-temps">
          {this.props.hourly.map((hour) => (
            <div key={hour.time}>
              <p>{hour.time.slice(11, 16)}</p>
              <p className="temp">{hour.temp_f}&#176;</p>
              <img src={hour.condition.icon} width="40px" alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HourlyTemp;
