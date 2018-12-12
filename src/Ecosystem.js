import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.section`
  background: #1e68b6; /* Old browsers */
  background: -moz-linear-gradient(left, #1e68b6 0%, #20428e 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #1e68b6 0%,#20428e 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #1e68b6 0%,#20428e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e68b6', endColorstr='#20428e',GradientType=1 ); /* IE6-9 */color:#fff;
`
const InnerWrapperNoPadding = styled.div`
  margin:0 auto;
  margin-bottom:-40px;
  max-width:1200px;
  padding-bottom:0px;
  @media screen and (max-width: 1328px){
    padding-left:80px;
    padding-right:80px;
  }
  @media screen and (max-width: 1000px){
    width: 93%;
    padding-left:0px;
    padding-right:0px;
  }
`
const Title = styled.h2`
  margin-bottom:-40px;
  @media screen and (max-width: 850px){
	   text-align:center;
  }
`
const ImageDiv = styled.div`
  width: 100%;
  bottom: -137px;
  position: relative;
  margin: 0 auto;
  display: block;
`
const Image = styled.img`
  max-width:100%;
`

class Ecosystem extends Component  {
  render() {
    return (
    <Main>
      <InnerWrapperNoPadding>
        <Title>Hydro Ecosystem</Title>
        <ImageDiv>
          <Image alt="hydro ecosystem" src={process.env.PUBLIC_URL+ "/images/hydro-ecosystem.png"} />
        </ImageDiv>
      </InnerWrapperNoPadding>
    </Main>
    )
  }
}

export default Ecosystem
