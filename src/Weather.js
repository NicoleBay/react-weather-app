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
        <li className="date">Last updated: Wednesday 14:00</li>
      </ul>
      <h1>London</h1>
      <ul>
        <li>Mostly Sunny</li>
      </ul>
      <div className="row mt-2 temperature-now">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Sunny"
          />
          <span className="temperature">21</span>
          <span className="unit">°C</span>
        </div>

        <div className="col-6 list">
          <ul>
            <li>Feels like: 19°C</li>
            <li>Wind Speed: 5mph</li>
            <li>Humidity: 39%</li>
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
}
