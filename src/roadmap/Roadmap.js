import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.section`
  background:#f5f5f5;
`
const Box3 = styled.div`
  display:table;
`
const Box = styled.div`
  float:left;
  width:33.333333%;
  margin-bottom: 42px;
  display:table-cell;
  @media screen and (max-width: 1000px){
    width:50%;
  }
  @media screen and (max-width: 686px){
    width:100%;
    float:none;
    display:block;
  }
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
  border-radius:200px;
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
const Button = styled.div`
  border-radius: 5px;
  padding:8px 24px 8px 21px;
  display: inline-block;
  font-size: 15px;
  &:hover {
    background:#000;text-decoration:none;color:#fff;
  	-webkit-box-shadow:0 0 14px 4px rgba(0, 0, 0, 0.2);
  	box-shadow: 0 0 14px 4px rgba(0, 0, 0, 0.2);
  	-moz-box-shadow: 0 0 14px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`
const ButtonColor = styled(Button)`
  color:#fff;
  background:#2739d6;
  margin-right:5px;
`
const ButtonGray =  styled(Button)`
  color:#2739d6;
  background:#e8e8e8;
`
const InnerWrapper = styled.div`
  margin:0 auto;
  max-width:1200px;
  padding-top:90px;
  padding-bottom:90px;
`
const Title = styled.h2`
  text-align:center;
  margin-bottom:70px;
`
const Phase = styled.h4`
  margin-bottom: 25px;
  text-align:center;
`
const Center =  styled.div`
  text-align:center;
`
const Clear = styled.div`
  clear:both;
`
const ClearBoxes = styled(Clear)`
  @media screen and (max-width: 1000px){
    clear:none;
  }
`
class Roadmap extends Component {

  render() {
    return (
      <Main>
  			<InnerWrapper>
  				<Title>Project Hydro Roadmap</Title>
  				<Center>
  					<Box3>

  						<Box>
  							<BoxPadding>
  								<BoxDate>Q3<BoxDateSpan>2018</BoxDateSpan></BoxDate>
  								<BoxInner>
  									<BoxText>
  										<img alt="Raindrop" src={process.env.PUBLIC_URL + "/images/raindrop.jpg"} />
  										<Phase>Raindrop</Phase>
  										<p>Raindrop is an authentication protocol which vastly improves upon current 2FA standards with decentralized public blockchain security for logins, transactions, and payments.</p>
  										<Clear/>
  									</BoxText>
  									<ButtonColor className="button color top-padding" href={process.env.PUBLIC_URL}>Learn More</ButtonColor>
  									<ButtonGray className="button gray top-padding" target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL}><i className="far fa-file-alt"></i>Whitepaper</ButtonGray>
  								</BoxInner>
  							</BoxPadding>
  						</Box>

  						<Box>
  							<BoxPadding>
  								<BoxDate>Q4<BoxDateSpan>2018</BoxDateSpan></BoxDate>
  								<BoxInner>
  									<BoxText>
  										<img alt="Snowflake" src={process.env.PUBLIC_URL + "/images/snowflake.jpg"} />
  										<Phase>Snowflake</Phase>
  										<p>Snowflake is an identity protocol designed to protect private data from identity theft.  Consumer data will be encrypted on the blockchain, frustrating hackers, and providing a major barrier to identity theft attempts.</p>
  										<Clear/>
  									</BoxText>
  									<ButtonColor className="button color top-padding" href={process.env.PUBLIC_URL}>Learn More</ButtonColor>
  									<ButtonGray className="button gray top-padding" target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL}><i className="far fa-file-alt"></i>Whitepaper</ButtonGray>
  								</BoxInner>
  							</BoxPadding>
  						</Box>

  						<Box>
  							<BoxPadding>
  								<BoxDate>Q1<BoxDateSpan>2019</BoxDateSpan></BoxDate>
  								<BoxInner>
  									<BoxText>
  										<img alt="Ice" src={process.env.PUBLIC_URL + "/images/ice.jpg"} />
  										<Phase>Ice</Phase>
  										<p>Ice is a document signing and verification protocol which will allow users to stamp, authenticate, verify and seal any document or contract that is sent.</p>
  										<Clear/>
  									</BoxText>
  									<ButtonColor className="button color top-padding" href={process.env.PUBLIC_URL}>Learn More</ButtonColor>
  									<ButtonGray className="button gray top-padding" target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL}><i className="far fa-file-alt"></i>Whitepaper</ButtonGray>
  								</BoxInner>
  							</BoxPadding>
  						</Box>

  						<ClearBoxes />

  						<Box>
  							<BoxPadding>
  								<BoxDate>Q2<BoxDateSpan>2019</BoxDateSpan></BoxDate>
  								<BoxInner>
  									<BoxText>
  										<img alt="Tide" src={process.env.PUBLIC_URL + "/images/tide.jpg"} />
  										<Phase>Tide</Phase>
  										<p>Tide is a payment protocol which will allow for one-click authorization of debit and credit POS transactions, as well as instantaneous p2p, p2b, and b2b payments across the blockchain.</p>
  										<Clear/>
  									</BoxText>
  									<ButtonColor className="button color top-padding" href={process.env.PUBLIC_URL}>Learn More</ButtonColor>
  									<ButtonGray className="button gray top-padding" target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL}><i className="far fa-file-alt"></i>Whitepaper</ButtonGray>
  								</BoxInner>
  							</BoxPadding>
  						</Box>

  						<Box>
  							<BoxPadding>
  								<BoxDate>Q3<BoxDateSpan>2019</BoxDateSpan></BoxDate>
  								<BoxInner>
  									<BoxText>
  										<img alt="Mist" src={process.env.PUBLIC_URL + "/images/mist.jpg"} />
  										<Phase>Mist</Phase>
  										<p>Mist is an artificial intelligence protocol which will create industry best data modeling of high-speed transactions and fraud detection.</p>
  										<Clear/>
  									</BoxText>
  									<ButtonColor className="button color top-padding" href={process.env.PUBLIC_URL}>Learn More</ButtonColor>
  									<ButtonGray className="button gray top-padding" target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL}><i className="far fa-file-alt"></i>Whitepaper</ButtonGray>
  								</BoxInner>
  							</BoxPadding>
  						</Box>

  						<Box>
  							<BoxPadding>
  								<BoxDate>Q4<BoxDateSpan>2019</BoxDateSpan></BoxDate>
  								<BoxInner>
  									<BoxText>
  										<img alt="Mist" src={process.env.PUBLIC_URL + "/images/hail.jpg"} />
  										<Phase>Hail</Phase>
  										<p>Coming Soon</p>
  										<Clear/>
  									</BoxText>
  									<ButtonColor className="button color top-padding" target="_blank" rel="noopener noreferrer" href="https://github.com/HydroCommunity/Community-Brainstorming/issues/7">Learn More</ButtonColor>

  								</BoxInner>
  							</BoxPadding>
  						</Box>

  						<Clear/>
  					</Box3>
  				</Center>
  			</InnerWrapper>
    	</Main>
    )
  }
}

export default Roadmap
