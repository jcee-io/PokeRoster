import React from 'react';
import PokemonGif from 'react-pokemon-gif';
import Profile from './Profile.jsx';
import $ from 'jquery';

let RosterInfo = (props) => {
	let roster;

	$.ajax({
	  type: 'GET',
	  url: '/roster/data',
	  data: {id: props.match.params.id},
	  async: false,
	  success: function(data) {

	  	roster = data[0];

	  },
	});

  return (
	  <div>
	    <h1 style={{textAlign: 'center'}}>{'</> '}Pokemon Roster Creator App // Roster View{' </>'}</h1>
			<hr/>
	    <h1 style={{textAlign: 'center'}}>ID: {roster._id}</h1>
      <div id="poke-roster">
        <Profile profilePic={roster['1'].profilePic} name={roster['1'].profileName} />
        <Profile profilePic={roster['2'].profilePic} name={roster['2'].profileName} />
        <Profile profilePic={roster['3'].profilePic} name={roster['3'].profileName} />
        <Profile profilePic={roster['4'].profilePic} name={roster['4'].profileName} />
        <Profile profilePic={roster['5'].profilePic} name={roster['5'].profileName} />
        <Profile profilePic={roster['6'].profilePic} name={roster['6'].profileName} />
      </div>
	  </div>
	);

};


export default RosterInfo;