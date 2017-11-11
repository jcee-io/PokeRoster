import React from 'react';
import PokeListEntry from './PokeListEntry.jsx';

const PokeList = props => (
	<div id="pokelist">
		{props.pokelist.map(pokemon => 
			<PokeListEntry select={props.select} pokemon={pokemon} />
		)}
	</div>
);




export default PokeList;