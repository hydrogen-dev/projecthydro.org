import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import NavBar from './nav-bar/NavBar';
import Roadmap from './roadmap/Roadmap';
import Footer from './Footer';
import Team from './Team';
import Home from './Home';
import Dapps from './Dapps';
import Docs from './Docs';
import { BrowserRouter as Router, Route } from "react-router-dom"

import './styles.css';

library.add(fab)

const base = {
    display:       "flex",
    flexDirection: "column",
    height:        "100vh"
}

const mainStyles = {
  display:        "flex",
  flexGrow:       1,
  flexShrink:     0,
  flexDirection:  "column",
  alignItems:     "center",
  justifyContent: "center",
  minWidth:       "100vw",
}

const headerStyles = {
  display:         "flex",
  flexDirection:   "column",
  flexShrink:      0,
  alignItems:      "center",
  justifyContent:  "center",
  minWidth:        "100vw",
  height:          143,
}

const footerStyle = {
  display:         "flex",
  flexDirection:   "row",
  alignItems:      "center",
  justifyContent:  "center",
  minHeight:       "10vh",
  flexShrink:      0,
  flexWrap:        "wrap",
}

class App extends Component {
  render() {
    return (
      <Router>
        <div style={base}>
          <div style={headerStyles}>
            <NavBar />
          </div>


          <Route exact path="/" component={Home} />

          <div style={mainStyles}>
              <Route path="/roadmap" component={Roadmap} />
              <Route path="/team" component={Team} />
              <Route path="/dapps" component={Dapps} />
              <Route path="/documentation" component={Docs} />
          </div>
          <div style={footerStyle}>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
