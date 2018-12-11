import React, { Component } from 'react';
import styled from 'styled-components'

const Row = styled.section`
  background:#fff;
`
const InnerWrapper = styled.div`
  margin:0 auto;
  max-width:1200px;
  padding-top:90px;
  padding-bottom:90px;
`
const Title = styled.h2`
  margin-bottom:70px;
  text-align:center;
`
const Center = styled.div`
  text-align:center;
`
const Clear = styled.div`
  clear:both;
`
const Col4 = styled.div`
  float:left;
  width:25%;
  @media screen and (max-width: 935px) {
  	width:100%;
    float:none;
    margin-bottom:30px;
  }
`
class Integration extends Component  {
  render() {
    return (
    <Row>
      <InnerWrapper>
        <Title>Integration Partners</Title>
        <br/>
        <Center>
          <Col4><img alt="axioma" src={process.env.PUBLIC_URL + "/images/axioma.png"} /></Col4>
          <Col4><img alt="swiftlance" src={process.env.PUBLIC_URL + "/images/swiftlance.png"} /></Col4>
          <Col4><img alt="minexcoin" src={process.env.PUBLIC_URL + "/images/minexcoin.png"} /></Col4>
          <Col4><img alt="chainlink" src={process.env.PUBLIC_URL + "/images/chainlink.png"} /></Col4>
          <Clear />
        </Center>
      </InnerWrapper>
    </Row>
    )
  }
}

export default Integration
