import React, { Component } from 'react';

class MoreInfo extends Component  {
  render() {
    return (
      <section id="row-2">
  		<div id="row-2-backgrounds">
  			<div class="inner-wrapper padding">
  				<div class="column-1">
  					<div class="center">
  						<h3>Hydro Explained</h3>
  						<br/>
  						<a class="button color" href={process.env.PUBLIC_URL}>Learn More</a>
  					</div>
  				</div>
  				<div class="column-2">
  					<div class="center">
  						<h3>Developers</h3>
  						<br/>
  						<a class="button color" href={process.env.PUBLIC_URL}>Learn More</a>
  					</div>
  				</div>
  				<div class="clr"></div>
  			</div>
  		</div>
  	</section>
    )
  }
}

export default MoreInfo
