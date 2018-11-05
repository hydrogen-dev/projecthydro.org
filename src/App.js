import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Profile from './profiles/profile';

library.add(fab)

const mainStyles = {
  height: "100vh",
  width: '100%',
  margin: 0,
  padding: 0,
  display: "block"
}
const headerStyles = {
  // height: "100vh",
  width: '100%',
  margin: 0,
  padding: 0,
  display: "flex"
}


class App extends Component {
  render() {
    return (
      <div style={mainStyles}>
        <header style={headerStyles}>
          <h2>Project Hydro Header</h2>
          <p>have some dope graphic here</p>
        </header>

        <section>
          <h2>About project hydro</h2>
        </section>

        <section>
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
          </div>
        </section>

        <footer>
          <p>Footer</p>
        </footer>

      </div>
    );
  }
}

export default App;
