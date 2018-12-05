import React, { Component } from 'react';
import Profile from './profiles/Profile';
import './sections.css';

const profileStyles = {
  width: '100%',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
}

const teamMembers = [
  {
    name: "Andy Chorlian",
    teamrole: "Protocol Developer",
    linkedIn: "https://www.linkedin.com/in/achorlia/",
    email: "andy@hydrogenplatform.com",
    twitter: "https://twitter.com/andy8052",
    github: "https://github.com/AndyHydro",
    photoName:  "andy.jpeg",
    backgroundName: "architecture.jpg"
  },
  {
    name: "Noah Zinsmeister",
    teamrole: "Protocol Developer",
    linkedIn: "https://www.linkedin.com/in/noahzinsmeister/",
    email: "noah@hydrogenplatform.com",
    twitter: "https://twitter.com/noahzinsmeister",
    github: "https://github.com/noahhydro",
    photoName: "noah.png",
    backgroundName: "stars.png"
  },
  {
    name: "Shane Hampton",
    teamrole: "Product",
    linkedIn: "https://www.linkedin.com/in/shane-hampton-a9689b49/",
    email: "shane@hydrogenplatform.com",
    twitter: "https://twitter.com/citizenshane_",
    github: "https://github.com/shanehampton",
    photoName: "shane.png",
    backgroundName: "hexagons.png",
  },
  {
    name: "Jess Nicholson",
    teamrole: "Product",
    linkedIn: "https://www.linkedin.com/in/jessica-nicholson-4b117092/",
    email: "jess@hydrogenplatform.com",
    github: "https://github.com/JessHydrogen",
    photoName: "jess.png",
    backgroundName: "kitty.jpg"
  },
  {
    name: "Anurag Angara",
    teamrole: "Product",
    linkedIn: "https://www.linkedin.com/in/anurag-angara-6863a483/",
    email: "anurag@hydrogenplatform.com",
    twitter: "https://twitter.com/AnuragHydro",
    github: "https://github.com/AnuragHydro",
    photoName: "anurag.png",
    backgroundName: "mumen.png"
  },
  {
    name: "Nahom Yemane",
    teamrole: "Community Manager",
    linkedIn: "https://www.linkedin.com/in/nahom-yemane/",
    email: "nahom@hydrogenplatform.com",
    twitter: "https://twitter.com/NYemane_",
    photoName: "nahom.png",
    backgroundName: "aurora.jpg"
  }
]

const daMembers = [
  {
    name: "Mark Anstead",
    teamrole: "Business Development",
    linkedIn: "https://www.linkedin.com/in/mark-anstead-098251108/",
    email: "ansteadm@gmail.com",
    twitter: "https://twitter.com/The_Shark_7",
    github: "https://github.com/ansteadm",
    photoName:  "mark_anstead.jpg",
    backgroundName: "nature.jpeg"
  },
  {
    name: "Jason Garland",
    teamrole: "Coordinator",
    linkedIn: "https://www.linkedin.com/in/jasongarland/",
    email: "jason.n.garland@protonmail.com",
    twitter: "https://twitter.com/jaazinn",
    github: "https://github.com/jaazinn",
    photoName:  "jason_garland.png",
    backgroundName: "china.bmp"
  },
  {
    name: "Awosika Israel Ayodeji",
    teamrole: "Business Development",
    linkedIn: "https://www.linkedin.com/in/ayodeji-israel-awosika-69924124/",
    email: "ebunayo08@gmail.com",
    twitter: "http://twitter.com/ebunayo08",
    photoName:  "awosika.png",
    backgroundName: "lagos.jpg"
  }
]

// A blank to copy from for new people because I am lazy
// {
//   name: "",
//   teamrole: "",
//   linkedIn: "",
//   email: "",
//   twitter: "",
//   github: "",
//   photoName:  "",
//   backgroundName: ""
// }

class Team extends Component  {
  render() {
    return (
      <>
        <h3 style={{width: "100%", textAlign: "center"}}>Core Contributors</h3>
        <section className="sections" id="team">
          <div style={{...profileStyles}}>
            {teamMembers
              .map(a => ({sort: Math.random(), value: a}))
              .sort((a, b) => a.sort - b.sort)
              .map(a => a.value)
              .map(member => <Profile {...member} />)
            }
          </div>
        </section>
        <h3 style={{width: "100%", textAlign: "center"}}>Decentralization Ambassadors</h3>
        <section className="sections" id="team">
          <div style={{...profileStyles}}>
            {daMembers
              .map(a => ({sort: Math.random(), value: a}))
              .sort((a, b) => a.sort - b.sort)
              .map(a => a.value)
              .map(member => <Profile {...member} />)
            }
          </div>
        </section>
      </>
    )
  }
}

export default Team
