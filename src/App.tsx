import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Weather from './Weather'
import { WeatherData } from './Interfaces';

function App() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Washington&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        setData(response.data);
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