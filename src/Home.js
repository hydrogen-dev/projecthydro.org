import React, { Component } from 'react';
import Header from './Header';
import Ecosystem  from './Ecosystem';
import MoreInfo from './MoreInfo';
import Vision from './Vision';
import './sections.css';

class Home extends Component  {
  render() {
    return (
      <>
      <Header />
      <Ecosystem />
      <MoreInfo />
      <Vision />
      </>
    )
  }
}

export default Home
