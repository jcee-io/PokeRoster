import React from 'react';

let Profile = props => (
  <div className="profile-container">
  	<h2>{props.name}</h2>
  	<img id="profile-image" src={props.profilePic}/>
  </div>
);



export default Profile;