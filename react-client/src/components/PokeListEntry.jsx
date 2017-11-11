import React from 'react';

const PokeListEntry = props => (
  <div>
  	<button className='poke-list-entry-button'>{props.pokemon}</button>
  </div>
);

export default PokeListEntry;