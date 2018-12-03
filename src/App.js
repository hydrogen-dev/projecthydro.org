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
import './sections.css';

library.add(fab)

const mainStyles = {
  height: "100vh",
  width: '100%',
  margin: 0,
  paddingTop: 130,
  display: "block"
}

class App extends Component {
  render() {
    return (
      <Router>
        <div style={mainStyles}>
            <NavBar />

            <Route exact path="/" component={Home} />
            <Route path="/roadmap" component={Roadmap} />
            <Route path="/team" component={Team} />
            <Route path="/dapps" component={Dapps} />
            <Route path="/documentation" component={Docs} />

            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
