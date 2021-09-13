import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./app/components/auth/SignIn";
import SignUp from "./app/components/auth/SignUp";
import Dashboard from "./app/components/dashboard/Dashboard";
import Navbar from "./app/components/layouts/Navbar";
import CreateProject from "./app/components/projects/CreateProjects";
import ProjectDetails from "./app/components/projects/ProjectDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create-project" component={CreateProject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
