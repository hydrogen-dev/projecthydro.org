import React, { Component } from 'react';

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <ul className="nav-bar">
        <li>
          <a href="#roadmap">
            Roadmap
          </a>
        </li>
        <li>
          <a href="#team">
            Team
          </a>
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/logo.gif`} alt="Project Hydro Logo" height="100" width="100" />
        </li>
        <li>
          <a href="/documentation">
            Docs
          </a>
        </li>
        <li>
          <a href="/events">
            Events
          </a>
        </li>
      </ul>
    )
  }
}

export default NavBar
