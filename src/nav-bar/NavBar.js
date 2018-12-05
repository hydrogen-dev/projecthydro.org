import React, { Component } from 'react';
import { Link } from "react-router-dom"

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <ul className="nav-bar">
        <li>
          <Link to="/roadmap">
            Roadmap
          </Link>
        </li>
        <li>
          <Link to="/team">
            Team
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/logo.gif`} alt="Project Hydro Logo" height="100" width="100" />
          </Link>
        </li>
        <li>
          <a href="https://hydro.gitbook.io/solidity/">
            Docs
          </a>
        </li>
        <li>
          <Link to="/dapps">
            dApps
          </Link>
        </li>
      </ul>
    )
  }
}

export default NavBar
