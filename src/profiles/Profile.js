import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './Profile.css';

class Profile extends Component {
  render() {
    console.log(this.props.github)
    return (
      <div className="card">
        <div
          className="card_Banner"
          style={{backgroundImage: `url("${process.env.PUBLIC_URL}/backgrounds/${this.props.backgroundName}")`}}
          >
          <div
            className="card_Avatar"
            style={{backgroundImage: `url("${process.env.PUBLIC_URL}/people/${this.props.photoName}")`}}
          >
          </div>
        </div>
        <h3>{this.props.name}</h3>
        <p>{this.props.role}</p>
        <ul>

          {this.props.linkedIn === undefined ? undefined : (
            <a href={this.props.linkedIn} target="_blank" rel="noopener noreferrer">
              <i style={{fontSize: 25}}><FontAwesomeIcon icon={['fab', 'linkedin']} /></i>
            </a>
          )}

          {this.props.github === undefined ? undefined : (
            <a href={this.props.github} target="_blank" rel="noopener noreferrer">
              <i style={{fontSize: 25}}><FontAwesomeIcon icon={['fab', 'github']}/></i>
            </a>
          )}

          {this.props.twitter === undefined ? undefined : (
            <a href={this.props.twitter} target="_blank" rel="noopener noreferrer">
              <i style={{fontSize: 25}}><FontAwesomeIcon icon={['fab', 'twitter']}/></i>
            </a>
          )}

          {this.props.email === undefined ? undefined : (
            <a href={`mailto:${this.props.email}`} target="_blank" rel="noopener noreferrer">
              <i style={{fontSize: 25}}><FontAwesomeIcon icon={faEnvelope}/></i>
            </a>
          )}

        </ul>
      </div>
    )
  }
}

export default Profile
