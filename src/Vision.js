import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.section`
  background: #1e68b6; /* Old browsers */
  background: -moz-linear-gradient(left, #1e68b6 0%, #20428e 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #1e68b6 0%,#20428e 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #1e68b6 0%,#20428e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e68b6', endColorstr='#20428e',GradientType=1 ); /* IE6-9 */color:#fff;
`
const InnerWrapper = styled.div`
  margin:0 auto;
  max-width:1200px;
  padding-top:90px;
  padding-bottom:90px;
`
const StoreButton = styled.img`
  height: 48px;
  margin-right: 12px;
`
const Column1 = styled.div`
  float:left;
  width:50%;
  @media screen and (max-width: 850px){
  	float:none;
    width:100%;
  	margin-top:80px;
  }
`
const Column2 = styled.div`
  float:right;
  width:50%;
  text-align:right;
  @media screen and (max-width: 850px){
     float:none;
     width:100%;
     margin-top:60px;
  }
`
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  float:left;
  width:100%;
`
const Text = styled.div`
  margin-bottom: 50px;
  line-height: 22px;
  margin-top: 72px;
`
const Title = styled.h2`
  margin-bottom:30px;
`
const Image = styled.img`
  max-width:100%;
`
const Clear = styled.div`
  clear:both;
`
class Vision extends Component  {
  render() {
    return (
    <Main>
      <InnerWrapper>
        <Column1>
          <Text>
            <Title>Project Hydro Vision</Title>
            Hydro’s goal from the beginning was to create a global decentralized financial ecosystem that powers the Web 3.0.  However, as the ecosystem grows Hydro’s technology can be used in virtually any global system that requires ID verification or authentication - providing blockchain security.
            <br/><br/>
            As a truly decentralized project, the founding team at Hydrogen are enlisting the help of the global community of developers as well as Decentralization Ambassadors, who will eventually take over the project through their HCDP and DA programs. Through these programs, Project Hydro aims to create a governance blueprint for future decentralized models.
          </Text>
          <Buttons>
            <a href="https://itunes.apple.com/app/id1406519814" target="_blank" rel="noopener noreferrer"><StoreButton alt="appstore" className="store-buttons" src="images/appstore.png"/></a>
            <a href="https://play.google.com/store/apps/details?id=com.hydrogenplatform.hydro" target="_blank" rel="noopener noreferrer"><StoreButton alt="playstore" className="store-buttons" src="images/playstore.png" /></a>
          </Buttons>
        </Column1>
        <Column2>
          <Image alt="hydro ecosystem" src="images/phoneapp.png" />
        </Column2>
        <Clear />
      </InnerWrapper>
    </Main>
    )
  }
}

export default Vision
