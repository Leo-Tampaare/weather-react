import React, { useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import Weather from "./Weather";

export default function SearchEngine() {
  let [city, setCity] = useState("London");
  let [searchData, setData] = useState(null);
  let [firstLoad, setLoadStatus] = useState(true);

  let apiKey = "349d90e7a285f14e8d2236c5925edbde";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function citySearch(response) {
    setData([response.data]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      axios.get(apiUrl).then(citySearch);
      setCity(null);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (firstLoad) {
    axios.get(apiUrl).then(citySearch);
    setLoadStatus(false);
  }

  return (
    <div className="weather">
      <form className="city-search" onSubmit={handleSubmit}>
        <input
          className="form-search"
          type="text"
          placeholder="Enter a city"
          autocomplete="off"
          required
          onChange={updateCity}
        />
        <input className="form-submit" type="submit" value="Search" />
        <i className="fa-solid fa-location-dot geo-icon"></i>
      </form>

      {searchData ? (
        <Weather data={searchData} />
      ) : (
        <div className="d-flex justify-content-center p-5">
          <Oval
            height={80}
            width={80}
            color="#ec6e4c"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#ec6e4c"
            strokeWidth={4}
            strokeWidthSecondary={4}
          />
        </div>
      )}
      <hr />
      <div className="row weather-forecast"></div>
    </div>
  );
}
