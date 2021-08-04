import React, { Component } from "react";

// Components
import Tomorrow from "./Tomorrow";
import DayAfter from "./DayAfter";
class FutureForecast extends Component {

  render() {
    return (
      <div className="future-container">
        <h1>Future Forecast</h1>

        <Tomorrow tomorrow={this.props.tomorrow} />
        <DayAfter dayAfter={this.props.dayAfter} />
      </div>
    );
  }
}
export default FutureForecast;
