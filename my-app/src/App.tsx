import React from 'react';
import logo from './showwcase-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
