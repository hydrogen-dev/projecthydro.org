import React, { Component } from 'react';
import './Roadmap.css';

class Roadmap extends Component {

  componentDidMount()  {
    const cards = document.querySelectorAll('.roadmap-card');

    function transition() {
      if (this.classList.contains('active')) {
        this.classList.remove('active')
      } else {
        this.classList.add('active');
      }
    }
    cards.forEach(card => card.addEventListener('click', transition));
  }

  render() {
    return (
      <div class="roadmap-container">
        <div class="cardContainer inactive">
          <div class="roadmap-card">
            <div class="side front">
              <div class="img" style={{backgroundImage: `url("${process.env.PUBLIC_URL}/roadmap/raindrop.png")`}}></div>
              <div class="info">
                <h2>Raindrop</h2>
                <p>Two-factor authentication (2FA) on the blockchain.</p>
              </div>
            </div>
            <div class="side back">
              <div class="info">
                <h2>At a glance</h2>
                <ul>
                  <li>Protect your account with an Ethereum address</li>
                  <li>Very login attempts through Smart Contracts</li>
                  <li>Easy to port to a new mobile device</li>
                </ul>
                <div class="btn">
                  <h4>Learn More</h4>
                  <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cardContainer inactive">
          <div class="roadmap-card">
            <div class="side front">
              <div class="img" style={{backgroundImage: `url("${process.env.PUBLIC_URL}/roadmap/snowflake.png")`}}></div>
              <div class="info">
                <h2>Snowflake</h2>
                <p>Unique and distributed user identity.</p>
              </div>
            </div>
            <div class="side back">
              <div class="info">
                <h2>At a glance</h2>
                <ul>
                  <li>Build on ERC-1484</li>
                  <li>Allow for use of multiple address in one identity</li>
                  <li>Protect your user data</li>
                </ul>
                <div class="btn">
                  <h4>Learn More</h4>
                  <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cardContainer inactive">
          <div class="roadmap-card">
            <div class="side front">
              <div class="img" style={{backgroundImage: `url("${process.env.PUBLIC_URL}/roadmap/ice.png")`}}></div>
              <div class="info">
                <h2>Ice</h2>
                <p>Document storage and signing.</p>
              </div>
            </div>
            <div class="side back">
              <div class="info">
                <h2>At a glance</h2>
                <ul>
                  <li>Securely sign and stamp documents</li>
                  <li>Very multiparty docuemnt signatures</li>
                </ul>
                <div class="btn">
                  <h4>Learn More</h4>
                  <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cardContainer inactive">
          <div class="roadmap-card">
            <div class="side front">
              <div class="img" style={{backgroundImage: `url("${process.env.PUBLIC_URL}/roadmap/tide.png")`}}></div>
              <div class="info">
                <h2>Tide</h2>
                <p>A layer 2 payments protocol.</p>
              </div>
            </div>
            <div class="side back">
              <div class="info">
                <h2>At a glance</h2>
                <ul>
                  <li>Transact quickly and securely on top of Ethereum</li>
                  <li>Reduce user friction in applications</li>
                </ul>
                <div class="btn">
                  <h4>Learn More</h4>
                  <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cardContainer inactive">
          <div class="roadmap-card">
            <div class="side front">
              <div class="img" style={{backgroundImage: `url("${process.env.PUBLIC_URL}/roadmap/mist.png")`}}></div>
              <div class="info">
                <h2>Mist</h2>
                <p>Blockchain based AI.</p>
              </div>
            </div>
            <div class="side back">
              <div class="info">
                <h2>At a glance</h2>
                <ul>
                  <li>TODO</li>
                  <li>TODO</li>
                </ul>
                <div class="btn">
                  <h4>Learn More</h4>
                  <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Roadmap
