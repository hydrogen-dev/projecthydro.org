import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const FooterBase = styled.footer`
  background:#333;
  padding-bottom:30px;
	font-weight:200;
  text-transform:uppercase;
  font-size:12px;
  letter-spacing:1px;
  width: 100%;
`
const InnerWrapper = styled.div`
  margin:0 auto;
  max-width:1200px;
  padding-top:90px;
  padding-bottom:90px;

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
const Center = styled.div`
  text-align:center;
`
const Clear = styled.div`
  clear:both;
`
const FooterLogo = styled.img`
  padding-bottom:13px;
`
const FooterIcons = styled.div`
  margin:0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-align: column;
`
const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  @media screen and (max-width: 935px){
	   flex-direction: column;
  }
`
const ListItem = styled.li`
  color:#fff;
  display: block;
  list-style: none;
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
const ListLink = styled.a`
  border-radius: 5px;
  -webkit-transition:  all 200ms linear 0s;
  -moz-transition:  all 200ms linear 0s;
  -o-transition: all 200ms linear 0s;
  transition:  all 200ms linear 0s;
  color:#fff;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;

  &:hover {
    text-decoration:none;
    background:#1b408e;
  }
`
const FAICustom = styled(FontAwesomeIcon)`
  color:#fff;
  text-align:center;
  font-size: 23px;
  margin-right:8px;
  margin-left:8px;
`
const Link = styled.a`
  -webkit-transition:  all 200ms linear 0s;
  -moz-transition:  all 200ms linear 0s;
  -o-transition: all 200ms linear 0s;
  transition:  all 200ms linear 0s;

  &:hover {
    background-color: #333;
  }
`
class Footer extends Component {
  render() {
    return (
      <FooterBase>
    		<InnerWrapper>
    			<Center>
    				<FooterLogo alt="hydro logo" src={process.env.PUBLIC_URL + "/images/footer-logo.jpg"} />
    				<br/>
    				<FooterIcons>
    					<Link href="https://www.facebook.com/hydrocommunitypage/" target="_blank" rel="noopener noreferrer"><FAICustom icon={['fab', 'facebook']} /></Link>
    					<Link href="https://twitter.com/HydroCommunity" target="_blank" rel="noopener noreferrer"><FAICustom icon={['fab', 'twitter']} /></Link>
    					<Link href="https://medium.com/hydrogen-api" target="_blank" rel="noopener noreferrer"><FAICustom icon={['fab', 'medium']} /></Link>
    					<Link href="https://discordapp.com/invite/SbW5Feg" target="_blank" rel="noopener noreferrer"><FAICustom icon={['fab', 'discord']} /></Link>
    					<Link href="https://t.me/projecthydro" target="_blank" rel="noopener noreferrer"><FAICustom icon={['fab', 'telegram']} /></Link>
    					<Link href="http://www.reddit.com/r/projecthydro" target="_blank" rel="noopener noreferrer"><FAICustom icon={['fab', 'reddit']} /></Link>
    					<Link href="https://github.com/hydrogen-dev" target="_blank" rel="noopener noreferrer"><FAICustom icon={['fab', 'github']} /></Link>
    					<Link href="https://www.linkedin.com/company/27129175/" target="_blank" rel="noopener noreferrer"><FAICustom icon={['fab', 'linkedin']} /></Link>
    				</FooterIcons>
    				<Clear />
    				<br/>
    				<Menu>
  						<ListItem><ListLink href={process.env.PUBLIC_URL}>About</ListLink></ListItem>
  						<ListItem><ListLink href={process.env.PUBLIC_URL}>Legal Information</ListLink></ListItem>
  						<ListItem><ListLink href={process.env.PUBLIC_URL}>Contact</ListLink></ListItem>
  						<ListItem><ListLink href={process.env.PUBLIC_URL}>Terms of Service</ListLink></ListItem>
  						<ListItem><ListLink href={process.env.PUBLIC_URL}>Privacy Policy</ListLink></ListItem>
              <ListItem><ListLink href="https://hydro.hs.app/communities/hydro"  target="_blank" rel="noopener noreferrer">Hydro Protocol Voting</ListLink></ListItem>
              <ListItem><ListLink href={process.env.PUBLIC_URL}>By-Laws</ListLink></ListItem>
    				</Menu>
    				<Clear />
    			</Center>
    		</InnerWrapper>
    	</FooterBase>
    )
  }
}

export default Footer
