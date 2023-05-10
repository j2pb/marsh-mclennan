import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <div>
             404
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;