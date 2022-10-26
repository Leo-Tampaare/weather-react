import React, { useState } from "react";

export default function WeatherTemp(props) {
  let [tempStatus, setTempStatus] = useState({
    celsius: "active",
    fahrenheit: null,
  });

  function celsiusTemp(event) {
    event.preventDefault();
    setTempStatus({ celsius: "active", fahrenheit: null });
  }

  function fahrenheitTemp(event) {
    event.preventDefault();
    setTempStatus({ celsius: null, fahrenheit: "active" });
  }

  if (tempStatus.celsius === "active") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          <a href="/" className={tempStatus.celsius} onClick={celsiusTemp}>
            °C
          </a>{" "}
          |{" "}
          <a
            href="/"
            className={tempStatus.fahrenheit}
            onClick={fahrenheitTemp}
          >
            °F
          </a>
        </span>
      </span>
    );
  } else {
    <span>
      <span className="temperature">
        {Math.round((props.celsius * 9) / 5 + 32)}
      </span>
      <span className="units">
        <a href="/" className={tempStatus.celsius} onClick={celsiusTemp}>
          °C
        </a>{" "}
        |{" "}
        <a href="/" className={tempStatus.fahrenheit} onClick={fahrenheitTemp}>
          °F
        </a>
      </span>
    </span>;
  }
}
