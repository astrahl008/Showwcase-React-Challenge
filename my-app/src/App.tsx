import React from 'react';
import logo from './showwcase-logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
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

function Product({ match }) {
  return <div>
    <Router>
      <Route path="/" exact component={Nav} />
    </Router>
    <h2>This is a page for product with ID: {match.params.id} </h2>;
  </div>
}

function Nav() {
  return <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products/1">Introduction</Link>
      </li>
      <li>
        <Link to="/products/2">Main</Link>
      </li>
    </ul>
  </nav>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
            <div>
            <Route path="/" exact component={Nav} />
            <Route path="/" exact component={Index} />
            <Route path="/products/:id" component={Product} />
            </div>
        </Router>

      </header>
      <body>
        
      </body>
    </div>
  );
}



export default App;
