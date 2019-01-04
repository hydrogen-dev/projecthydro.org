import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFingerprint, faUser, faFileAlt, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const HeaderMain = styled.header`
  background: #1e68b6; /* Old browsers */
  background: -moz-linear-gradient(left, #1e68b6 0%, #20428e 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #1e68b6 0%,#20428e 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #1e68b6 0%,#20428e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e68b6', endColorstr='#20428e',GradientType=1 ); /* IE6-9 */color:#fff;
`
const Intro = styled.div`
  width:50%;
  padding-top: 163px;
  padding-bottom: 123px;

  @media screen and (max-width: 1164px){
	   margin: 0 auto;
     width:80%;
  }
  @media screen and (max-width: 1040px){
	   padding-top: 103px;
  }
`
const Title = styled.h1`
  @media screen and (max-width: 1164px){
    text-align: center;
  }
`
const Subtitle = styled.h2`
  font-size: 20px;
  line-height: 28px;
  font-weight: 300;
  font-family: 'Avenir Next LT Pro', arial;
  @media screen and (max-width: 1164px){
    text-align: center;
  }
`
const BackLogo = styled.div`
  background:url(${process.env.PUBLIC_URL}/images/faint-back-logo.png) no-repeat bottom right;
`
const MiddleCurve = styled.div`
  background: url(${process.env.PUBLIC_URL}/images/middlecurve.png) no-repeat;
  width: 100%;
  height: 510px;
  background-size: contain;
  margin-top: -218px;
  @media screen and (min-width: 1900px){
    background-size: cover;
    height:650px;
  }
  @media screen and (max-width: 1440px){
  	margin-top: -117px;
    height: 435px;
  }
  @media screen and (max-width: 918px){
	   margin-top: -97px;
     height: 313px;
  }
`
const IconTopWrapper = styled.div`
  @media screen and (max-width: 1164px){
    margin:0 auto;display: table;
    right: 0;
    left: 0;
  }
`
const InnerWrapper = styled.div`
  margin:0 auto;
  max-width:1200px;
  padding-top:90px;
  padding-bottom:90px;
`
const IconCircle = styled.div`
  float:left;
  border-radius:200px;
  height:85px;
  width:85px;
  border:1px solid #fff;
  @media screen and (max-width: 686px){
	   float: none;
  }
`
const IconIdentity = styled.i`
  font-size:41px;
  position: relative;
  margin-left: 22px;
  margin-top:22px;
  display:block;
`
const TextIdentity = styled.div`
  position:relative;
  margin-top: 27px;
  margin-left: 9px;
`
const IconAccounts = styled.i`
  font-size:41px;
  position: relative;
  margin-left: 24px;
  margin-top:20px;
  display:block;
`
const TextAccounts = styled.div`
  position:relative;
  margin-top: 28px;
  margin-left: 7px;
`
const IconDocuments = styled.i`
  font-size:41px;
  position: relative;
  margin-left: 27px;
  margin-top:19px;
  display:block;
`
const TextDocs = styled.div`
  position:relative;
  margin-top: 28px;
  margin-left: 3px;
`
const IconTransactions = styled.i`
  font-size:41px;
  position: relative;
  margin-left: 19px;
  margin-top:20px;
  display:block;
`
const TextTransactions = styled.div`
  position:relative;
  margin-top: 27px;
  margin-left: 0px;
`
const IconLine = styled.div`
  float:left;
  width:46px;
  @media screen and (max-width: 686px){
	   float: none;
  }
`
const IconLineInner = styled.div`
  border-top:1px solid #fff;
  height:5px;
  width:100%;
  margin-top: 43px;
  @media screen and (max-width: 686px){
	   border-top: none;height: 35px;
  }
`
const Clear = styled.div`
  clear:both;
`

class Header extends Component {
  render() {
    return (
    <HeaderMain>
      <BackLogo>
        <InnerWrapper>

          <Intro>
            <Title>Security & Identity on the Blockchain</Title>
            <br/>
            <Subtitle>Hydro is a decentralized ecosystem using cutting-edge cryptography to secure user accounts, identities, and transactions.</Subtitle>

            <br/><br/>

            <IconTopWrapper>
              <IconCircle>
                <IconIdentity><FontAwesomeIcon icon={faFingerprint}/></IconIdentity>
                <TextIdentity>Identities</TextIdentity>
              </IconCircle>

              <IconLine><IconLineInner/></IconLine>

              <IconCircle>
                <IconAccounts><FontAwesomeIcon icon={faUser}/></IconAccounts>
                <TextAccounts>Accounts</TextAccounts>
              </IconCircle>

              <IconLine><IconLineInner/></IconLine>

              <IconCircle>
                <IconDocuments><FontAwesomeIcon icon={faFileAlt}/></IconDocuments>
                <TextDocs>Documents</TextDocs>
              </IconCircle>

              <IconLine><IconLineInner/></IconLine>

              <IconCircle>
                <IconTransactions><FontAwesomeIcon icon={faCreditCard}/></IconTransactions>
                <TextTransactions>Transactions</TextTransactions>
              </IconCircle>

              <Clear />
            </IconTopWrapper>

          </Intro>


        </InnerWrapper>
      </BackLogo>
      <MiddleCurve/>
    </HeaderMain>
    )
  }
}

export default Header
