import { useState, useEffect } from "react";

import { WeatherApi } from "./Utils";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip,
} from "react-leaflet";
import { WeatherProps } from "./Interfaces";
const AirPollution: React.FC<WeatherProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const redOptions = { color: "red" };
  useEffect(() => {
    WeatherApi.getAirPollution(props.data.coord.lat, props.data.coord.lon)
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [props.data.coord.lat, props.data.coord.lon]);
 
  const renderChart = (data: any) => {
    return (
      <MapContainer center={[39.7837304, -100.4458825]} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker
          center={[props.data.coord.lat, props.data.coord.lon]}
          pathOptions={redOptions}
          radius={50}
        >
          <Tooltip permanent>
            {data.list.map((item:any, index:any) => (
        <div key={index}>
          <ul>
            <li>Air Quality Index: {item.main.aqi}</li>
            <li>Carbon Monoxide: {item.components.co}</li>
            <li>Nitrogen Monoxide: {item.components.no}</li>
            <li>Nitrogen Dioxide: {item.components.no2}</li>
            <li>Ozone: {item.components.o3}</li>
            <li>Sulfur Dioxide: {item.components.so2}</li>
            <li>Particulate Matter 2.5: {item.components.pm2_5}</li>
            <li>Particulate Matter 10: {item.components.pm10}</li>
            <li>Ammonia: {item.components.nh3}</li>
            <li>Date and Time: {new Date(item.dt * 1000).toLocaleString()}</li>
          </ul>
        </div>
      ))}
            
        </Tooltip>
        </CircleMarker>
      </MapContainer>
    );
  };
  return <>
   {loading && <div>Loading...</div>}
    {!!error.length && <div>Error: {error}</div>}
  {data && renderChart(data)}
  </>;
};
export default AirPollution;
