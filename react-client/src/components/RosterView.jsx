import React from 'react';
import Roster from './Roster.jsx';
import PokemonGif from 'react-pokemon-gif';
import $ from 'jquery';

class RosterView extends React.Component {
  constructor() {
    super();
    this.state = {
      rosters: []
    }

    this.loadRoster();
  }

  loadRoster() {
    $.getJSON('/roster', data => {
      console.log(data);
      this.setState({rosters: data});
    });
  }

  render() {

    return(
      <div>
        <h1 style={{textAlign: 'center'}}>{'</> '}Pokemon Roster Creator App // View Rosters{' </>'}</h1>
        <hr/>
        <div id="roster-view">
          <Roster rosters={this.state.rosters} />
        </div>
      </div>
    );
  }
};

export default RosterView;