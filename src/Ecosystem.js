import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.section`
  background: #1e68b6; /* Old browsers */
  background: -moz-linear-gradient(left, #1e68b6 0%, #20428e 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #1e68b6 0%,#20428e 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #1e68b6 0%,#20428e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e68b6', endColorstr='#20428e',GradientType=1 ); /* IE6-9 */color:#fff;
`
const ImageDiv = styled.div`
  width: 100%;
  bottom: -137px;
  position: relative;
`

class Ecosystem extends Component  {
  render() {
    return (
    <Main>
      <div id="row-1-backgrounds">
        <div className="inner-wrapper no-padding">
          <h2 className="no-padding">Hydro Ecosystem</h2>
          <ImageDiv>
            <img alt="hydro ecosystem" src={process.env.PUBLIC_URL+ "/images/hydro-ecosystem.png"} />
          </ImageDiv>
        </div>
      </div>
    </Main>
    )
  }
}

export default Ecosystem
