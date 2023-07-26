import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-secondary" />
          </div>
        </div>
      </form>
      <ul>
        <li>Last updated: Wednesday 14:00</li>
      </ul>
      <h1>London</h1>
      <ul>
        <li>Mostly Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Sunny"
          />
          21°C
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: 19°C</li>
            <li>Wind Speed: 5mph</li>
            <li>Humidity: 39%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
