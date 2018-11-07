import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Profile from './profiles/Profile';
import NavBar from './nav-bar/NavBar';
import Roadmap from './roadmap/Roadmap';
import Footer from './Footer';
import './sections.css';

library.add(fab)

const mainStyles = {
  height: "100vh",
  width: '100%',
  margin: 0,
  paddingTop: 130,
  display: "block"
}

const headerStyles = {
  width: '100%',
  margin: 0,
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap"
}


class App extends Component {
  render() {
    return (
      <div style={mainStyles}>
          <NavBar />

          <h2 style={{width: "100%", textAlign: "center"}}>Project Hydro</h2>
          <section className="sections">
            Hydro is a layer 2 blockchain platform built on top of Ethereum
          </section>

          <h2 style={{width: "100%", textAlign: "center"}}>Roadmap</h2>
          <section className="sections">
            <Roadmap />
          </section>

          <h2 style={{width: "100%", textAlign: "center"}}>Core Contributors</h2>
          <section className="sections" id="team">
            <div style={{...headerStyles, flex: 1}} id="cards">
              <Profile
                name = "Andy Chorlian"
                linkedIn="https://www.linkedin.com/in/achorlia/"
                email="andy@hydrogenplatform.com"
                twitter="https://twitter.com/andy8052"
                github="https://github.com/AndyHydro"
                photoName = "andy.jpeg"
                backgroundName = "architecture.jpg"
              />
              <Profile
                name = "Noah Zinsmeister"
                linkedIn="https://www.linkedin.com/in/noahzinsmeister/"
                email="noah@hydrogenplatform.com"
                twitter="https://twitter.com/noahzinsmeister"
                github="https://github.com/noahhydro"
                photoName = "noah.png"
                backgroundName = "stars.png"
              />
              <Profile
                name = "Shane Hampton"
                linkedIn="https://www.linkedin.com/in/shane-hampton-a9689b49/"
                email="shane@hydrogenplatform.com"
                twitter="https://twitter.com/citizenshane_"
                github="https://github.com/shanehampton"
                photoName = "shane.png"
                backgroundName = "hexagons.png"
              />
            </div>
          </section>

          <Footer />

      </div>
    );
  }
}

export default App;
