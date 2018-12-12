import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import './NavBar.css'

const Container = styled.div`
  width: 100%;
`
const BannerWrapper = styled.div`
  z-index: 4;
  transition: all 300ms ease-in-out;
  position: fixed;
  width: 100%;
`
const Banner = styled.div`
  width: 100%;
  display: block;
  background: none;
  transition: all 300ms ease-in-out;
  @media screen and (max-width: 1040px){
	   background: #fff !important;
     display: flex !important;
  }
`
const MenuWrap = styled.div`
  display:block;
  width:100%;
`
const Logo = styled.div`
  float:left;
  margin-left: 102px;
  margin-top: 43px;
  @media screen and (max-width: 1040px){
  	margin-left: 32px;
    margin-top: 13px;
  }
`
const ShowMobile = styled(FontAwesomeIcon)`
  display:none;
  @media screen and (max-width: 1040px){
	   display: block;
     float: right;
     margin-right: 27px;
     font-size: 24px;
     margin-top: 18px;
  }
`
const MenuAlign = styled.div`
  margin-top: 43px;
  margin-right:102px;
  float:right;
  @media screen and (max-width: 1040px){
	   display:none;
  }
`
const ListItem = styled.li`
  color:#fff;
  display: block;
  list-style: none;
  position: relative;
  float: left;
  height: 48px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-right: 4px;
  line-height: 27px;
  @media screen and (max-width: 935px){
	   float:none;
     margin-bottom: -13px;
  }
`
const Menu = styled.div`
  float:right;
  margin-top: 12px;
`
const StyledHref = styled.a`
  border-radius: 5px;
  -webkit-transition:  all 200ms linear 0s;
  -moz-transition:  all 200ms linear 0s;
  -o-transition: all 200ms linear 0s;
  transition:  all 200ms linear 0s;
  color: ${props => props.home ? "#fff" : "#1e66b6"};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  &:hover {
    text-decoration:none;
    background:#1b408e;
  }
`
const StyledLink = styled(Link)`
  border-radius: 5px;
  -webkit-transition:  all 200ms linear 0s;
  -moz-transition:  all 200ms linear 0s;
  -o-transition: all 200ms linear 0s;
  transition:  all 200ms linear 0s;
  color: ${props => props.home ? "#fff" : "#1e66b6"};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  &:hover {
    text-decoration:none;
    background:#1b408e;
  }
`
const MenuLogo = styled.div`
  position: absolute;
  width: 100%;
`
const LogoBack = styled.div`
  z-index: 4;
  background: url(${process.env.PUBLIC_URL}/images/topcurve.png) no-repeat  -208px 2px;
  height: 250px;
  padding-top: 68px;
  margin-top: -42px;
  @media screen and (max-width: 1378px){
	   background-position: -378px 2px;
  }
  @media screen and (max-width: 1200px){
	   background-position: -558px 2px;
  }
  @media screen and (max-width: 1040px){
	   background:none;
  }
`
const Clear = styled.div`
  clear:both;
`

let refOffset = 0;
const bannerHeight = 77;

class NavBar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handler);
  }

  handler = () => {
    const bannerWrapper = document.querySelector('.banner-wrapper');
    const banner = document.querySelector('.banner');

    const newOffset = window.scrollY || window.pageYOffset;

    if (newOffset > bannerHeight) {
      if (newOffset > refOffset) {
        bannerWrapper.classList.remove('animateIn');
        bannerWrapper.classList.add('animateOut');
      } else {
        bannerWrapper.classList.remove('animateOut');
        bannerWrapper.classList.add('animateIn');
      }
      banner.style.background = 'rgba(255, 255, 255, 1)';
      banner.style.display = 'flex';
      refOffset = newOffset;
    } else {
      bannerWrapper.classList.remove('animateIn');
      bannerWrapper.classList.remove('animateOut');
      banner.style.backgroundColor = 'rgba(162, 197, 35, 0)';
      banner.style.display = 'block';
    }
  };

  render() {
    const isHome = this.props.location.pathname === "/" ? true : false;

    return (
      <>
      <Container>
        <BannerWrapper className="banner-wrapper">
          <Banner className="banner">
            <MenuWrap>
              <Logo className="logo">
                <Link  to="/">
                  <img alt="logo" src={process.env.PUBLIC_URL + "/images/logo.png"} />
                </Link>
              </Logo>

              <ShowMobile icon={['fas', 'bars']} />
              <MenuAlign className="menu-align">
                <Menu>
                  <ListItem>
                    {isHome ? <StyledLink home to="/roadmap">Roadmap</StyledLink> : <StyledLink to="/roadmap">Roadmap</StyledLink>}
                  </ListItem>
                  <ListItem>
                    {isHome ? <StyledLink home to="/team">Team</StyledLink> : <StyledLink to="/team">Team</StyledLink>}
                  </ListItem>
                  <ListItem>
                    {isHome ? <StyledHref home href="https://hydro.gitbook.io/solidity/">Developers</StyledHref> : <StyledHref href="https://hydro.gitbook.io/solidity/">Developers</StyledHref>}
                  </ListItem>
                  <ListItem>
                    {isHome ? <StyledLink home to="/dapps">dApps</StyledLink> : <StyledLink to="/dapps">dApps</StyledLink>}
                  </ListItem>
                </Menu>
                <Clear />
              </MenuAlign>
            </MenuWrap>
          </Banner>
        </BannerWrapper>
      </Container>

      <MenuLogo>
        <LogoBack />
      </MenuLogo>
      </>
    )
  }
}

export default withRouter(NavBar)
