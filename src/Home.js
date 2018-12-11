import React, { Component } from 'react';
import Header from './Header';
import Ecosystem  from './Ecosystem';
import MoreInfo from './MoreInfo';
import Vision from './Vision';
import Integration from './Integration';

class Home extends Component  {
  render() {
    return (
      <>
      <Header />
      <Ecosystem />
      <MoreInfo />
      <Vision />
      <Integration />
      </>
    )
  }
}

export default Home
