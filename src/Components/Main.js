import React, { Component } from "react";

// Components
import CurrentWeather from "./CurrentWeather";
import FutureForecast from "./FutureForecast";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      current: null,
      hourly: null,
      lat: null,
      long: null,
      tomorrow: null,
      dayAfter: null,
      location: null,
    };
  }

  async componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          long: position.coords.longitude,
          lat: position.coords.latitude,
        });
      });
    } else {
      console.log("Not Available");
    }

    const forecast = `http://api.weatherapi.com/v1/forecast.json?key=b4b3c1c290e64c4b92e11218211603&days=9&q=40.2434406,-75.26954539776581&aqi=no`;
    const response = await fetch(forecast);
    const data = await response.json();
    this.setState({
      current: data.current,
      hourly: data.forecast.forecastday[0].hour,
      tomorrow: data.forecast.forecastday[1],
      dayAfter: data.forecast.forecastday[2],
      location: data.location,
      loading: false,
    });
    console.log(data);
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <div className="main-container">
            <CurrentWeather
              current={this.state.current}
              hourly={this.state.hourly}
              location={this.state.location}
            />

            <FutureForecast
              tomorrow={this.state.tomorrow}
              dayAfter={this.state.dayAfter}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Main;
