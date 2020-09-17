import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Nav() {
    return <nav>
      <ul>
        <li>
          <Link to="/App">Home</Link>
        </li>
      </ul>
    </nav>
  }

  export default Nav;