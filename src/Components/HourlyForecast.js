import React from "react";
import { UseWeatherAppContext } from ".././Context/Context";
const HourlyForecast = () => {
  let {
    state: { current, city },
  } = UseWeatherAppContext();

  return (
    <>
      {current ? (
        <div className="humidityWrap">
          <div className="humidityData">
            <div className="title">Temperatute </div>
            <div className="value"> Max: {Math.round(current.temp.max)}°C</div>
            <div className="value">Min: {Math.round(current.temp.min)}°C</div>
          </div>
         
          </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HourlyForecast;

