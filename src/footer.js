import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'

import './footer.css'

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <footer class="footer-distributed">

        <div class="footer-left">

          <h3>Hydro</h3>

          <p class="footer-links">
            <a href="#">Home</a>
            ·
            <a href="#">Blog</a>
            ·
            <a href="#">Other</a>
            ·
            <a href="#">About</a>
            ·
            <a href="#">Faq</a>
            ·
            <a href="#">Contact</a>
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
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div class="footer-icons">
            <a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'github']} /></a>

          </div>

        </div>

      </footer>
    )
  }
}

export default Footer
