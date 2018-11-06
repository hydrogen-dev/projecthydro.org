import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Profile.css';

class Profile extends Component {
  render() {
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
        <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
        <ul>
          <a href={this.props.linkedIn} target="_blank" rel="noopener noreferrer">
            <i style={{fontSize: 25}}><FontAwesomeIcon icon={['fab', 'linkedin']} /></i>
          </a>
          <a href={this.props.github} target="_blank" rel="noopener noreferrer">
            <i style={{fontSize: 25}}><FontAwesomeIcon icon={['fab', 'github']}/></i>
          </a>
          <a href={this.props.twitter} target="_blank" rel="noopener noreferrer">
            <i style={{fontSize: 25}}><FontAwesomeIcon icon={['fab', 'twitter']}/></i>
          </a>
        </ul>
      </div>
    )
  }
}

export default Profile
