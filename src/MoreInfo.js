import React, { Component } from 'react';

class MoreInfo extends Component  {
  render() {
    return (
      <section id="row-2">
  		<div id="row-2-backgrounds">
  			<div className="inner-wrapper padding">
  				<div className="column-1">
  					<div className="center">
  						<h3>Hydro Explained</h3>
  						<br/>
  						<a className="button color" href={process.env.PUBLIC_URL}>Learn More</a>
  					</div>
  				</div>
  				<div className="column-2">
  					<div className="center">
  						<h3>Developers</h3>
  						<br/>
  						<a className="button color" href={process.env.PUBLIC_URL}>Learn More</a>
  					</div>
  				</div>
  				<div className="clr"></div>
  			</div>
  		</div>
  	</section>
    )
  }
}

export default MoreInfo
