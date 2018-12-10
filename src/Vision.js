import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.section`
  background: #1e68b6; /* Old browsers */
  background: -moz-linear-gradient(left, #1e68b6 0%, #20428e 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #1e68b6 0%,#20428e 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #1e68b6 0%,#20428e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e68b6', endColorstr='#20428e',GradientType=1 ); /* IE6-9 */color:#fff;
`
const StoreButton = styled.img`
  height: 48px;
  margin-right: 12px;
`
const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  float:left;
  width:50%;
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
class Vision extends Component  {
  render() {
    return (
    <Main>
      <div class="inner-wrapper padding">
        <Column1>
          <Text>
            <h2 class="bottom-padding-30">Project Hydro Vision</h2>
            Hydro’s goal from the beginning was to create a global decentralized financial ecosystem that powers the Web 3.0.  However, as the ecosystem grows Hydro’s technology can be used in virtually any global system that requires ID verification or authentication - providing blockchain security.
            <br/><br/>
            As a truly decentralized project, the founding team at Hydrogen are enlisting the help of the global community of developers as well as Decentralization Ambassadors, who will eventually take over the project through their HCDP and DA programs. Through these programs, Project Hydro aims to create a governance blueprint for future decentralized models.
          </Text>
          <Buttons>
            <a href="https://itunes.apple.com/app/id1406519814" target="_blank"><StoreButton alt="appstore" class="store-buttons" src="images/appstore.png"/></a>
            <a href="https://play.google.com/store/apps/details?id=com.hydrogenplatform.hydro" target="_blank"><StoreButton alt="playstore" class="store-buttons" src="images/playstore.png" /></a>
          </Buttons>
        </Column1>
        <div class="column-2">
          <img alt="hydro ecosystem" src="images/phoneapp.png" />
        </div>
        <div class="clr"></div>
      </div>
    </Main>
    )
  }
}

export default Vision
