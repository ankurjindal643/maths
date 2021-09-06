import Navbar from "./navbar";
import Content from "./content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ten from "./ten";
import Eleven from "./eleven";
import Twelve from "./twelve";
let App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/ten">
            <Ten />
          </Route>
          <Route path="/eleven">
            <Eleven />
          </Route>
          <Route path="/twelve">
            <Twelve />
          </Route>
          <Route path="/">
            <Content />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
