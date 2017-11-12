import React from 'react';

let RosterListEntry = props => (
  <div className="roster">
  	<div><strong>Roster</strong></div>
  	<br/>
  	<div>{props.roster['1'].profileName === 'Select Pokemon' ? undefined : props.roster['1'].profileName}</div>
  	<div>{props.roster['2'].profileName === 'Select Pokemon' ? undefined : props.roster['2'].profileName}</div>
  	<div>{props.roster['3'].profileName === 'Select Pokemon' ? undefined : props.roster['3'].profileName}</div>
  	<div>{props.roster['4'].profileName === 'Select Pokemon' ? undefined : props.roster['4'].profileName}</div>
  	<div>{props.roster['5'].profileName === 'Select Pokemon' ? undefined : props.roster['5'].profileName}</div>
  	<div>{props.roster['6'].profileName === 'Select Pokemon' ? undefined : props.roster['6'].profileName}</div>
  </div>
);


export default RosterListEntry;