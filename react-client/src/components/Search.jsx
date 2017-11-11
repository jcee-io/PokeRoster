import React from 'react';

const Search = props => (
	<div>
		<form onSubmit={props.search}>
			<input onChange={props.query} type="text" />
		</form>
	</div>
);

export default Search;