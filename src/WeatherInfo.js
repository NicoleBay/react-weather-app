import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul>
        <li className="date">
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <h1>{props.data.city}</h1>
      <ul>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-2 temperature-now">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>

        <div className="col-6 list">
          <ul>
            <li>
              <i class="fa-solid fa-temperature-full"></i> Feels Like:{" "}
              <strong>{Math.round(props.data.feelsLike)}°C</strong>
            </li>
            <li>
              {" "}
              <i class="fa-solid fa-wind"></i> Wind Speed:{" "}
              <strong>{Math.round(props.data.wind * 2.24)}mph</strong>
            </li>
            <li>
              {" "}
              <i class="fa-solid fa-droplet"></i> Humidity:{" "}
              <strong>{props.data.humidity}%</strong>
            </li>
          </ul>
        </div>
        <div className="row high-low">
          <div className="col-6 ms-4">
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
}
