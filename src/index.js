import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './client/HomePage';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import UpdatePage from './client/UpdatePage';

ReactDOM.render(
  // <React.StrictMode>
  //   {/* <App />
  // </React.StrictMode>, */}
  <Router>  
    <Switch>  
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login" exact={true} component={LoginPage} />
      <Route path="/signup" exact={true} component={SignUpPage} />
      <Route path="/update/:id" exact={true} component={UpdatePage} />


    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
