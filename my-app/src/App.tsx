import React from 'react';
import logo from './showwcase-logo.svg';
import './App.css';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function ForFun() {
  return <div>
    <img src={logo} className="App-logo" alt="logo" />
        <p>
          Showwcase Developer Challenge
        </p>
        <a
          className="App-link"
          href="https://showwcase.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Showwcase
        </a>
  </div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
            <div>
            <Route path="/" exact component={Nav} />
            <Route path="/" exact component={ForFun} />
            </div>
        </Router>

      </header>
    </div>
  );
}



export default App;
