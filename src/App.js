import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Profile from './profiles/profile';

library.add(fab)

const styles = {
  height: "100vh",
  margin: 0,
  padding: 0,
  display: "flex"
}

class App extends Component {
  render() {
    return (
      <div style={styles}>
        <span>Project Hydro</span>
        <span>Team Members</span>
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
    );
  }
}

export default App;
