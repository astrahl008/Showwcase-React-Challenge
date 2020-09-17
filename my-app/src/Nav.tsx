import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Nav() {
    return <nav>
        <Link to="/App">Home</Link>
        <Link to="/Intro">Intro</Link>
    </nav>
  }

  export default Nav;