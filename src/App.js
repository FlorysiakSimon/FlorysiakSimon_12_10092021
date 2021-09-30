import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './components/Header';
import UserPage from "./pages/UserPage";
import HomePage from "./pages/HomePage"


export default function App() {

  // fetch('./user12.json').then(response => {
  //  // console.log(response);
  //   return response.json();
  // }).then(data => {
  //   console.log(data);
  // }).catch(err => {
  //   console.log("Error Reading data " + err);
  // });
      

  return (
    <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/user/:id" component={UserPage} />
        </Switch>
    </Router>
  );
}



