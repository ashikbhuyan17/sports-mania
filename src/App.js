import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './componenets/Home/Home';
import LeagueDetails from './componenets/LeagueDetails/LeagueDetails';
import NoMatch from './componenets/NoMatch/NoMatch'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/league/:idLeague">
          <LeagueDetails />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
