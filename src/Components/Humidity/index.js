import React from "react";
import { UseWeatherAppContext } from "../../Context/Context";

const HumidityComponents = () => {
  let {
    state: { current, city },
  } = UseWeatherAppContext();
  console.log("myData", current, city);

  return (
    <>
      {current ? (
        
        <div className="humidityWrap">
          <div className="humidityData">
            <div className="title">Temperatute </div>
            <div className="value"> Max: {Math.round(current.temp.max)}°C</div>
            <div className="value">Min: {Math.round(current.temp.min)}°C</div>
          </div>
          <div className="humidityData">
            <div className="title">Humidity </div>
            <div className="value">{current.humidity} %</div>
          </div>
          <div className="humidityData">
            <div className="title">Wind </div>
            <div className="value">{Math.round(current.wind_speed)} km/h</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HumidityComponents;
