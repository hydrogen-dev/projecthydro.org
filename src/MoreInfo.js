import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.section`
  background:#fff;
`
const InnerWrapper = styled.div`
  margin:0 auto;
  max-width:1200px;
  padding-top:90px;
  padding-bottom:90px;
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
const Center = styled.div`
  text-align:center;
`
const Button = styled.a`
  border-radius: 5px;
  padding:8px 29px 8px 29px;
  display: inline-block;
  font-size: 15px;
  color:#fff;
  background:#2739d6;
  -webkit-transition:  all 200ms linear 0s;
  -moz-transition:  all 200ms linear 0s;
  -o-transition: all 200ms linear 0s;
  transition:  all 200ms linear 0s;
  &:hover {
    background:#000;text-decoration:none;color:#fff;
  	-webkit-box-shadow:0 0 14px 4px rgba(0, 0, 0, 0.2);
  	box-shadow: 0 0 14px 4px rgba(0, 0, 0, 0.2);
  	-moz-box-shadow: 0 0 14px 4px rgba(0, 0, 0, 0.2);
  }
`
const Clear = styled.div`
  clear:both;
`

class MoreInfo extends Component  {
  render() {
    return (
      <Main>
  			<InnerWrapper>
  				<Column1>
  					<Center>
  						<h3>Hydro Explained</h3>
  						<br/>
  						<Button href={process.env.PUBLIC_URL}>Learn More</Button>
  					</Center>
  				</Column1>
  				<Column2>
  					<Center>
  						<h3>Developers</h3>
  						<br/>
  						<Button href={process.env.PUBLIC_URL}>Learn More</Button>
  					</Center>
  				</Column2>
  				<Clear />
  			</InnerWrapper>
    	</Main>
    )
  }
}

export default MoreInfo
