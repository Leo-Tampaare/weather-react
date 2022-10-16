import React, { useState } from "react";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(props.data[0].main.temp);
  let [celsiusStatus, setCelsiusStatus] = useState("active");
  let [fahrenheitStatus, setFahrenheitStatus] = useState(null);

  console.log(props.data[0]);
  let icon = `http://openweathermap.org/img/wn/${props.data[0].weather[0].icon}@2x.png`;

  function formatDate(timestamp) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let date = new Date(timestamp);
    let day = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
  }

  function celsiusTemp(event) {
    event.preventDefault();
    setTemperature(props.data[0].main.temp);
    setCelsiusStatus("active");
    setFahrenheitStatus(null);
  }

  function fahrenheitTemp(event) {
    event.preventDefault();
    setTemperature((props.data[0].main.temp * 9) / 5 + 32);
    setCelsiusStatus(null);
    setFahrenheitStatus("active");
  }

  return (
    <div>
      <div className="city">{props.data[0].name}</div>
      <div className="date">
        Last updated: <span>{formatDate(props.data[0].dt * 1000)}</span>
      </div>
      <div className="description value">
        {props.data[0].weather[0].description}
      </div>
      <div className="row">
        <div className="col-7">
          <img src={icon} alt="" className="icon" />
          <span className="temperature">{Math.round(temperature)}</span>
          <span className="units">
            <a href="/" className={celsiusStatus} onClick={celsiusTemp}>
              °C
            </a>{" "}
            |{" "}
            <a href="/" className={fahrenheitStatus} onClick={fahrenheitTemp}>
              °F
            </a>
          </span>
        </div>
        <div className="col-5">
          <ul>
            <li>
              Humidity:{" "}
              <span className="value">{props.data[0].main.humidity}</span>
            </li>
            <li>
              Wind: <span className="value">{props.data[0].wind.speed}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
