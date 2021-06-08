import React, { Component } from "react";

export class CurrentTemp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="current-weather">
        <h1>Current Weather</h1>
        <section className="current-weather-sections">
          <div>
            <h2>{this.props.location.name}</h2>

            <h3>Current Tempurature</h3>
            <p className="current-temp">{this.props.current.temp_f}&#176;</p>
          </div>
          <div>
            <img
              src={this.props.current.condition.icon}
              width="90px"
              alt="current weather"
            />
            <p>{this.props.current.condition.text}</p>{" "}
          </div>
        </section>
      </div>
    );
  }
}

export default CurrentTemp;
