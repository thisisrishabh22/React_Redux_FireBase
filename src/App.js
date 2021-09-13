import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./app/components/dashboard/Dashboard";
import Navbar from "./app/components/layouts/Navbar";
import ProjectDetails from "./app/components/projects/ProjectDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/project/:id" component={ProjectDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
