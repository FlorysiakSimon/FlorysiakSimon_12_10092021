import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './components/Header';
import UserPage from "./pages/UserPage";
import HomePage from "./pages/HomePage"
import LeftBar from "./components/LeftBar";

export default function App() {
  return (
    <Router>
        <Header />
        <LeftBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/user/:id" component={UserPage} />
        </Switch>
    </Router>
  );
}



