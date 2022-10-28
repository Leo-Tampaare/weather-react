import React from "react";

export default function Weather(props) {
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
          <span className="temperature">
            {Math.round(props.data[0].main.temp)}
          </span>
          <span className="units">°C</span>
        </div>
        <div className="col-5">
          <ul>
            <li>
              Humidity:{" "}
              <span className="value">{props.data[0].main.humidity}%</span>
            </li>
            <li>
              Wind:{" "}
              <span className="value">{props.data[0].wind.speed} km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
