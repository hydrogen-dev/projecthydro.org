import React, { Component } from 'react';
import './sections.css';

class Home extends Component  {
  render() {
    return (
      <>
      <h2 style={{width: "100%", textAlign: "center"}}>Project Hydro</h2>
      <section className="sections">
        Hydro is a layer 2 blockchain platform built on top of Ethereum
      </section>
      </>
    )
  }
}

export default Home
