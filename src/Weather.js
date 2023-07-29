import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      iconUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus={true}
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary location-icon w-100"
              />
            </div>
          </div>
        </form>
        <ul>
          <li className="date">
            <FormattedDate date={weatherData.date} />
          </li>
        </ul>
        <h1>{weatherData.city}</h1>
        <ul>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-2 temperature-now">
          <div className="col-6">
            <img src="{weatherData.iconUrl}" alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>

          <div className="col-6 list">
            <ul>
              <li>
                <i class="fa-solid fa-temperature-full"></i> Feels Like:{" "}
                <strong>{Math.round(weatherData.feelsLike)}°C</strong>
              </li>
              <li>
                {" "}
                <i class="fa-solid fa-wind"></i> Wind Speed:{" "}
                <strong>{Math.round(weatherData.wind * 2.24)}mph</strong>
              </li>
              <li>
                {" "}
                <i class="fa-solid fa-droplet"></i> Humidity:{" "}
                <strong>{weatherData.humidity}%</strong>
              </li>
            </ul>
          </div>
          <div className="row high-low">
            <div className="col-6 ms-2">
              <span className="temp-high">
                <strong>22</strong>
              </span>
              <span className="units">
                <strong>°C</strong>
              </span>{" "}
              | <span className="temp-low">19</span>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b13b374bef64oac0e068e7t94aa7beef";
    const units = "metric";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
