import "./App.css";
import MovieDetail from "./components/movieDetail/movieDetail";
import Home from "./components/page/home/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
