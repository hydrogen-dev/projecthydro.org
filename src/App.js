import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import NavBar from './nav-bar/NavBar';
import Roadmap from './roadmap/Roadmap';
import Footer from './Footer';
import Team from './Team';
import Home from './Home';
import { BrowserRouter as Router, Route } from "react-router-dom"

library.add(fab, fas)

const base = {
    minWidth:      "100vw",
    maxWidth:      "100vw",
    display:       "flex",
    flexDirection: "column",
    height:        "100vh"
}

class App extends Component {
  render() {
    return (
      <Router>
        <div style={base}>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/roadmap" component={Roadmap} />
          <Route path="/team" component={Team} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
