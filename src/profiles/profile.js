import React, { Component } from 'react';
import './ProfileCSS.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Profile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const name = this.props.name;
    const linkedIn = this.props.linkedIn;
    const twitter = this.props.twitter;
    const github = this.props.github;
    const email = this.props.email;
    const photoName = this.props.photoName;
    const background = this.props.background;

    return (
      <div className="card">
         <div className="card_Banner" style={{backgroundImage: 'url("'+ process.env.PUBLIC_URL  + '/backgrounds/' + background + '")'}}>
      	   <div className="card_Avatar" style={{backgroundImage: 'url("'+ process.env.PUBLIC_URL  + '/people/' + photoName + '")'}}>
           </div>
      	</div>
      	<h3>{name}</h3>
      	<a href={email}>{email}</a>
      	<ul>
          <a href={linkedIn}><i><FontAwesomeIcon icon={['fab', 'linkedin']} /></i></a>
          <a href={github}><i><FontAwesomeIcon icon={['fab', 'github']}/></i></a>
          <a href={twitter}><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
        </ul>
      </div>
    )
  }
}

export default Profile
