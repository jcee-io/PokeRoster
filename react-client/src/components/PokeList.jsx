import React from 'react';
import PokeListEntry from './PokeListEntry.jsx';

const PokeList = props => (
	<div>
		{props.pokelist.map(pokemon => 
			<PokeListEntry pokemon={pokemon} />
		)}
	</div>
);




export default PokeList;