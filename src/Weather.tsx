import React from 'react';
import {WeatherProps} from './Interfaces'

const Weather: React.FC<WeatherProps> = ({data}) => {
  const { name, main } = data;
  const temperature = Math.round(main.temp - 273.15);
  const feelsLike = Math.round(main.feels_like - 273.15);

  return (
    <div>
      <h1>Weather in {name}</h1>
      <p>Temperature: {temperature}°C</p>
      <p>Feels like: {feelsLike}°C</p>
    </div>
  );
}

export default Weather;