import React from 'react';
import {Link} from 'react-router-dom';
let RosterListEntry = props => (
  <div style={{cursor: 'pointer'}} className="roster">
  	<div><strong><Link to={`/roster/${props.roster._id ? props.roster._id : ''}`}>Roster</Link></strong></div>
  	<br/>
  	<div>{props.roster['1'].profileName === 'Select Pokemon' ? 'None' : props.roster['1'].profileName}</div>
  	<div>{props.roster['2'].profileName === 'Select Pokemon' ? 'None' : props.roster['2'].profileName}</div>
  	<div>{props.roster['3'].profileName === 'Select Pokemon' ? 'None' : props.roster['3'].profileName}</div>
  	<div>{props.roster['4'].profileName === 'Select Pokemon' ? 'None' : props.roster['4'].profileName}</div>
  	<div>{props.roster['5'].profileName === 'Select Pokemon' ? 'None' : props.roster['5'].profileName}</div>
  	<div>{props.roster['6'].profileName === 'Select Pokemon' ? 'None' : props.roster['6'].profileName}</div>
  </div>
);


export default RosterListEntry;