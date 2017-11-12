import React from 'react';
import RosterListEntry from './RosterEntryList.jsx';
let Profile = props => (
  <div id="roster-list">
  	{props.rosters.map((roster, index) => 
  	  <RosterListEntry key={index} roster={roster} />
  	)}
  </div>
);

export default Profile;