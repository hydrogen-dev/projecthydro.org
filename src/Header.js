import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFingerprint, faUser, faFileAlt, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import './Header.css';

const BackLogo = styled.div`
  background:url(${process.env.PUBLIC_URL}/images/faint-back-logo.png) no-repeat bottom right;
`
const MiddleCurve = styled.div`
  background: url(${process.env.PUBLIC_URL}/images/middlecurve.png) no-repeat;
  width: 100%;
  height: 510px;
  background-size: contain;
  margin-top: -218px;
`
const IconCircle = styled.div`
  float:left;
  border-radius:200px;
  height:85px;
  width:85px;
  border:1px solid #fff;
`
const IconIdentity = styled.i`
  font-size:41px;
  position: relative;
  margin-left: 22px;
  margin-top:22px;
  display:block;
`
const IconAccounts = styled.i`
  font-size:41px;
  position: relative;
  margin-left: 24px;
  margin-top:20px;
  display:block;
`
const IconDocuments = styled.i`
  font-size:41px;
  position: relative;
  margin-left: 27px;
  margin-top:19px;
  display:block;
`
const IconTransactions = styled.i`
  font-size:41px;
  position: relative;
  margin-left: 19px;
  margin-top:20px;
  display:block;
`
const IconLine = styled.div`
  float:left;
  width:46px;
`
const IconLineInner = styled.div`
  border-top:1px solid #fff;
  height:5px;
  width:100%;
  margin-top: 43px;
`

class Header extends Component {
  render() {
    return (
    <header id="header">
      <BackLogo>
        <div className="inner-wrapper padding">

        <div id="intro">
          <h1>Security & Identity on the Blockchain</h1>
          <br/>
          <h2>Hydro is a decentralized ecosystem using cutting-edge cryptography to secure user accounts, identites, and transactions.</h2>

          <br/><br/>

          <div id="icon-top-wrapper">
            <IconCircle>
              <IconIdentity><FontAwesomeIcon icon={faFingerprint}/></IconIdentity>
              <div className="text-ident">Identities</div>
            </IconCircle>

            <IconLine><IconLineInner/></IconLine>

            <IconCircle>
              <IconAccounts><FontAwesomeIcon icon={faUser}/></IconAccounts>
              <div className="text-accounts">Accounts</div>
            </IconCircle>

            <IconLine><IconLineInner/></IconLine>

            <IconCircle>
              <IconDocuments><FontAwesomeIcon icon={faFileAlt}/></IconDocuments>
              <div className="text-doc">Documents</div>
            </IconCircle>

            <IconLine><IconLineInner/></IconLine>

            <IconCircle>
              <IconTransactions><FontAwesomeIcon icon={faCreditCard}/></IconTransactions>
              <div className="text-trans">Transactions</div>
            </IconCircle>

            <div className="clr"></div>
          </div>

        </div>


        </div>
      </BackLogo>
      <MiddleCurve/>
    </header>
    )
  }
}

export default Header
