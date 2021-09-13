import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./app/components/dashboard/Dashboard";
import Navbar from "./app/components/layouts/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
