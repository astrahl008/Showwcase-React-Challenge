import React from 'react';
import logo from './showwcase-logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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