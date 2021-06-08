import React, { Component } from "react";

// Components
import CurrentTemp from "./CurrentTemp";
import HourlyTemp from "./HourlyTemp";

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="current-container">
        

        <CurrentTemp
          current={this.props.current}
          location={this.props.location}
        />
        <HourlyTemp hourly={this.props.hourly} />
      </div>
    );
  }
}

export default CurrentWeather;
