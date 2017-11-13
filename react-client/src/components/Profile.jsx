import React from 'react';
import PokemonGif from 'react-pokemon-gif';

let Profile = props => (
  <div className="profile-container">
  	<h2>{props.name}</h2>
  	<div id='gif'>
	  	{props.profilePic === 'http://rs1344.pbsrc.com/albums/p645/Pichubytes/Pi_zpsd2dda909.png~c200' || props.name === 'Select Pokemon'?
	  	<img id="profile-image" src={props.profilePic} /> : <PokemonGif pokemon={props.name} height={200} />
	    }
    </div>
  </div>
);



export default Profile;