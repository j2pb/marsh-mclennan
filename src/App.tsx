import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Weather from './Weather'
import { WeatherData } from './Interfaces';
import {WeatherApi} from "./Utils"

function App() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [USState, setUSState] = useState('Washington');

  useEffect(() => {
    WeatherApi.getWeather(USState)
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(error => {
        console.log("error", error.message)
        setError(error.message);
        setLoading(false);
      });
  }, []);



  if (error.length) {
    return <div>Error: {error}</div>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
          {loading && <div>Loading...</div>}
          {!!error.length && <div>Error: {error}</div>}
            {data && <Weather data={data} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;