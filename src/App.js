import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
