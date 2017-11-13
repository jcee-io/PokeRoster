import React from 'react';
import PokeListEntry from './PokeListEntry.jsx';
import {Link} from 'react-router-dom';
const PokeList = props => (
	<div id="pokelist">
		{props.pokelist.map((pokemon, index) => 
			
			<PokeListEntry key={index} select={props.select} pokemon={pokemon} />
			
		)}
	</div>
);




export default PokeList;