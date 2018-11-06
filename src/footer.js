import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer class="footer-distributed">

        <div class="footer-left">

          <h3>Project Hydro</h3>

          <p class="footer-links">
          </p>

        </div>

        <div class="footer-center">

          <div>
            <p><span>Everywhere</span> The World</p>
          </div>

          <div>
            <p><a href="mailto:hydro@hydrogenplatform.com">hydro@hydrogenplatform.com</a></p>
          </div>

        </div>

        <div class="footer-right">

          <p class="footer-company-about">
            <span>About the Project</span>
            Hydro is a public and decentralized project building products on the Ethereum blockchain.
          </p>

          <div class="footer-icons">
            <a href="https://twitter.com/HydrogenAPI" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a href="https://www.linkedin.com/company/hydrogenplatform/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
            <a href="https://github.com/hydrogen-dev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </div>

        </div>
      </footer>
    )
  }
}

export default Footer
