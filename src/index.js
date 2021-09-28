import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todos from './Todos';
import Nav from './Nav'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css'
// import Counter from "./Counter"

ReactDOM.render(
  <React.StrictMode>
    {/* <Counter /> */}
    <Router>
    <Nav />
    <Switch>
      <Route path="/app" component={App}></Route>
      <Route path="/todos" component={Todos}></Route>

    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
