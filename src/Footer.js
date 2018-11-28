import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer-distributed">

        <div className="footer-left">

          <h3>Project Hydro</h3>

          <p className="footer-links">
          </p>

        </div>

        <div className="footer-center">
          <div>
            <p><span>Everywhere</span> The World</p>
          </div>
          <div>
            <p><a href="mailto:hydro@hydrogenplatform.com">hydro@hydrogenplatform.com</a></p>
          </div>
        </div>

        <div className="footer-right">

          <p className="footer-company-about">
            <span>About the Project</span>
            Hydro is a public, decentralized project building products on the Ethereum blockchain.
          </p>

          <div className="footer-icons">
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
