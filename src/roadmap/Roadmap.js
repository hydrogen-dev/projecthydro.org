import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  float:left;
  width:33.333333%;
  margin-bottom: 42px;
  display:table-cell;
`
const BoxPadding = styled.div`
  padding-left:18px;
  padding-right:18px;
  position: relative;
`
const BoxDate = styled.div`
  height:60px;
  width:60px;
  position:absolute;
  right:0;
  margin-top: -18px;
  color:#fff;
  -webkit-box-shadow:0px 4px 8px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.1);
  background:#f8f8f8;
  font-size: 18px;
  line-height: 49px;
  font-weight: bold;
  color:#6b6b6b;
`
const BoxDateSpan = styled.span`
  display: block;
  font-size: 12px;
  font-weight: normal;
  margin-top: -32px;
`
const BoxInner = styled.div`
  background:#fff;
	padding:32px;
	border-radius:5px;
	padding-top: 43px;
	line-height: 23px;
	-webkit-box-shadow:0 0 35px 0px rgba(0, 0, 0, 0.05);
	box-shadow:0 0 35px 0px rgba(0, 0, 0, 0.05);
	-moz-box-shadow: 0 0 35px 0px rgba(0, 0, 0, 0.05);
`
const BoxText = styled.div`
  min-height:284px;
`
class Roadmap extends Component {

  render() {
    return (
      <section id="row-4">
    		<div id="row-4-backgrounds">
    			<div class="inner-wrapper padding">
    				<h3 class="center bottom-padding">Project Hydro Roadmap</h3>
    				<div class="center">
    					<div>

    						<Box>
    							<BoxPadding>
    								<BoxDate>Q3<BoxDateSpan>2018</BoxDateSpan></BoxDate>
    								<BoxInner>
    									<BoxText>
    										<img alt="Raindrop" src={process.env.PUBLIC_URL + "/images/raindrop.jpg"} />
    										<h4 class="center bottom-padding-icons">Raindrop</h4>
    										<p>Raindrop is an authentication protocol which vastly improves upon current 2FA standards with decentralized public blockchain security for logins, transactions, and payments.</p>
    										<div class="clr"></div>
    									</BoxText>
    									<a class="button color top-padding" href={process.env.PUBLIC_URL}>Learn More</a>
    									<a class="button gray top-padding" target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL}><i class="far fa-file-alt"></i>Whitepaper</a>
    								</BoxInner>
    							</BoxPadding>
    						</Box>

    						<Box>
    							<BoxPadding>
    								<BoxDate>Q4<BoxDateSpan>2018</BoxDateSpan></BoxDate>
    								<BoxInner>
    									<BoxText>
    										<img alt="Snowflake" src={process.env.PUBLIC_URL + "/images/snowflake.jpg"} />
    										<h4 class="center bottom-padding-icons">Snowflake</h4>
    										<p>Snowflake is an identity protocol designed to protect private data from identity theft.  Consumer data will be encrypted on the blockchain, frustrating hackers, and providing a major barrier to identity theft attempts.</p>
    										<div class="clr"></div>
    									</BoxText>
    									<a class="button color top-padding" href={process.env.PUBLIC_URL}>Learn More</a>
    									<a class="button gray top-padding" target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL}><i class="far fa-file-alt"></i>Whitepaper</a>
    								</BoxInner>
    							</BoxPadding>
    						</Box>

    						<Box>
    							<BoxPadding>
    								<BoxDate>Q1<BoxDateSpan>2019</BoxDateSpan></BoxDate>
    								<BoxInner>
    									<BoxText>
    										<img alt="Ice" src={process.env.PUBLIC_URL + "/images/ice.jpg"} />
    										<h4 class="center bottom-padding-icons">Ice</h4>
    										<p>Ice is a document signing and verification protocol which will allow users to stamp, authenticate, verify and seal any document or contract that is sent.</p>
    										<div class="clr"></div>
    									</BoxText>
    									<a class="button color top-padding" href={process.env.PUBLIC_URL}>Learn More</a>
    									<a class="button gray top-padding" target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL}><i class="far fa-file-alt"></i>Whitepaper</a>
    								</BoxInner>
    							</BoxPadding>
    						</Box>

    						<div class="clr-boxes"></div>

    						<Box>
    							<BoxPadding>
    								<BoxDate>Q2<BoxDateSpan>2019</BoxDateSpan></BoxDate>
    								<BoxInner>
    									<BoxText>
    										<img alt="Tide" src={process.env.PUBLIC_URL + "/images/tide.jpg"} />
    										<h4 class="center bottom-padding-icons">Tide</h4>
    										<p>Tide is a payment protocol which will allow for one-click authorization of debit and credit POS transactions, as well as instantaneous p2p, p2b, and b2b payments across the blockchain.</p>
    										<div class="clr"></div>
    									</BoxText>
    									<a class="button color top-padding" href={process.env.PUBLIC_URL}>Learn More</a>
    									<a class="button gray top-padding" target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL}><i class="far fa-file-alt"></i>Whitepaper</a>
    								</BoxInner>
    							</BoxPadding>
    						</Box>

    						<Box>
    							<BoxPadding>
    								<BoxDate>Q3<BoxDateSpan>2019</BoxDateSpan></BoxDate>
    								<BoxInner>
    									<BoxText>
    										<img alt="Mist" src={process.env.PUBLIC_URL + "/images/mist.jpg"} />
    										<h4 class="center bottom-padding-icons">Mist</h4>
    										<p>Mist is an artificial intelligence protocol which will create industry best data modeling of high-speed transactions and fraud detection.</p>
    										<div class="clr"></div>
    									</BoxText>
    									<a class="button color top-padding" href={process.env.PUBLIC_URL}>Learn More</a>
    									<a class="button gray top-padding" target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL}><i class="far fa-file-alt"></i>Whitepaper</a>
    								</BoxInner>
    							</BoxPadding>
    						</Box>

    						<Box>
    							<BoxPadding>
    								<BoxDate>Q4<BoxDateSpan>2019</BoxDateSpan></BoxDate>
    								<BoxInner>
    									<BoxText>
    										<img alt="Mist" src={process.env.PUBLIC_URL + "/images/hail.jpg"} />
    										<h4 class="center bottom-padding-icons">Hail</h4>
    										<p>Coming Soon</p>
    										<div class="clr"></div>
    									</BoxText>
    									<a class="button color top-padding" target="_blank" rel="noopener noreferrer" href="https://github.com/HydroCommunity/Community-Brainstorming/issues/7">Learn More</a>

    								</BoxInner>
    							</BoxPadding>
    						</Box>

    						<div class="clr"></div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</section>
    )
  }
}

export default Roadmap
