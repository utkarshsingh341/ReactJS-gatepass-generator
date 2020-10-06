import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import User from "./components/users/User";
import Main from "./components/pages/Main";
import Login from "./components/pages/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
