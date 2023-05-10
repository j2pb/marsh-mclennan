import {useEffect, useState} from 'react';
import Weather from './Weather'
import AirPollution from './AirPollution'
import { WeatherData } from './Interfaces';
import {WeatherApi} from "./Utils"
import SelectComponent from './components/SelectComponent'
import options from './USStates.json';
const Home = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [USState, setUSState] = useState('Washington');

  const handleSelectChange = (value: string) => {
    setUSState(value);
  };
  useEffect(() => {
    WeatherApi.getWeather(USState)
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [USState]);
  return (
   <>
   <SelectComponent options={Object.keys(options)} value={USState} onChange={handleSelectChange}/>
   {loading && <div>Loading...</div>}
    {!!error.length && <div>Error: {error}</div>}
   {data && <Weather data={data}/>}
   {data && <AirPollution data={data}/>}
   </>
  );
}

export default Home;