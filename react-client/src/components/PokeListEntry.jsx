import React from 'react';

const PokeListEntry = props => (
  <div>
  	<button onClick={() => props.select(props.pokemon)} className='poke-list-entry-button'>{props.pokemon}</button>
  </div>
);

export default PokeListEntry;