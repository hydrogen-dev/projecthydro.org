import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Profile from './profiles/profile';
import Footer from './footer';
import './sections.css';
import './header.css';

library.add(fab)

const mainStyles = {
  height: "100vh",
  width: '100%',
  margin: 0,
  padding: 0,
  display: "block"
}
const headerStyles = {
  width: '100%',
  margin: 0,
  padding: 0,
  display: "flex"
}


class App extends Component {
  render() {
    return (
      <div style={mainStyles}>
        <header class="header" style={headerStyles}>
          <h2>Project Hydro Header</h2>
          <p>have some dope graphic here</p>
        </header>

        <section class="sections">
          <h2>About project hydro</h2>
        </section>

        <section class="sections">
          <h2>Team Members</h2>
          <div style={headerStyles} id="cards">
            <Profile
              name = "Andy Chorlian"
              linkedIn="https://www.linkedin.com/in/achorlia/"
              email="andy@hydrogenplatform.com"
              twitter="https://twitter.com/andy8052"
              github="https://github.com/AndyHydro"
              photoName = "andy.jpeg"
              background = "architecture.jpg"
            />
            <Profile
              name = "Noah Zinsmeister"
              linkedIn="https://www.linkedin.com/in/noahzinsmeister/"
              email="noah@hydrogenplatform.com"
              twitter="https://twitter.com/noahzinsmeister"
              github="https://github.com/noahhydro"
              photoName = "noah.png"
            />
            <Profile
              name = "Shane Hampton"
              linkedIn="https://www.linkedin.com/in/shane-hampton-a9689b49/"
              email="shane@hydrogenplatform.com"
              twitter="https://twitter.com/citizenshane_"
              github="https://github.com/shanehampton"
              photoName = "shane.png"
              background = "hexagons.png"
            />
          </div>
        </section>

        <Footer />

      </div>
    );
  }
}

export default App;
