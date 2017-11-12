import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import PokeList from './components/PokeList.jsx';
import Profile from './components/Profile.jsx';
import Roster from './components/Roster.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.defaultProfilePic = 'http://rs1344.pbsrc.com/albums/p645/Pichubytes/Pi_zpsd2dda909.png~c200';
    this.defaultProfileName = 'Select Pokemon';

    this.state = { 
      pokelist: [],
      query: '',
      profile: {
        1: {
          profilePic:'http://rs1344.pbsrc.com/albums/p645/Pichubytes/Pi_zpsd2dda909.png~c200',
          profileName: 'Select Pokemon'
        }, 
        2: {
          profilePic:'http://rs1344.pbsrc.com/albums/p645/Pichubytes/Pi_zpsd2dda909.png~c200',
          profileName: 'Select Pokemon'
        },
        3: {
          profilePic:'http://rs1344.pbsrc.com/albums/p645/Pichubytes/Pi_zpsd2dda909.png~c200',
          profileName: 'Select Pokemon'
        },
        4: {
          profilePic:'http://rs1344.pbsrc.com/albums/p645/Pichubytes/Pi_zpsd2dda909.png~c200',
          profileName: 'Select Pokemon'
        },
        5: {
          profilePic:'http://rs1344.pbsrc.com/albums/p645/Pichubytes/Pi_zpsd2dda909.png~c200',
          profileName: 'Select Pokemon'
        },
        6: {
          profilePic:'http://rs1344.pbsrc.com/albums/p645/Pichubytes/Pi_zpsd2dda909.png~c200',
          profileName: 'Select Pokemon'
        }
      } 
    }

    //this.pokeRender();
    this.searchHandler = this.searchHandler.bind(this);
    this.searchQuery = this.searchQuery.bind(this);
    this.pokeSelect = this.pokeSelect.bind(this);
    this.pokeUndo = this.pokeUndo.bind(this);
    this.saveRoster = this.saveRoster.bind(this);
    this.pokeCounter = 1;
  }

  pokeSelect(pokemon) {
    console.log(pokemon);
    var method = pokemon === 'default' ? 1 : undefined;

    $.post('/acquire',{pokemon: pokemon});

    if(this.pokeCounter <= 6) {
      this.pokeRender(method); 
    }
  }

  pokeUndo() {

    setTimeout(() => {
      var profiles = this.state.profile;

      profiles[this.pokeCounter.toString()] = {
        profilePic: this.defaultProfilePic,
        profileName: this.defaultProfileName
      }

      this.pokeSelect('default');

      this.pokeCounter = this.pokeCounter < 1 ? 1 : this.pokeCounter;

      this.setState({profile: profiles}); 
    },0)
  }

  pokeRender(method) {
    $.getJSON('/acquire', data => {
      console.log(data);
      var profiles = this.state.profile;

      profiles[this.pokeCounter.toString()] = {
        profilePic: data.photo,
        profileName: data.name
      }

      if(!method){
        this.pokeCounter++;
        this.pokeCounter = this.pokeCounter > 6 ? 6 : this.pokeCounter;
      } else {
        this.pokeCounter--;
        this.pokeCounter = this.pokeCounter < 1 ? 1 : this.pokeCounter;
      }
      
      this.setState({profile: profiles});

    });
  }

  pokeQuery() {
    $.getJSON('/pokelist', data => {
      console.log(data);
      if(data.length === 0) {
        this.setState({pokelist: []});
      } else {
        this.setState({pokelist: data});
      }
      
    });
  }
  searchQuery(event) {

    this.setState({query: event.target.value});
  }
  searchHandler(event) {
    if(!this.state.query) {
      this.setState({pokelist: []});
    } else {
      $.post('/pokemon', {query: this.state.query});
      this.pokeQuery();
    }


    event.preventDefault();
  }

  saveRoster(roster) {
    $.post('/roster', roster);
  }
  render () {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>{'</> '}Pokemon Roster Creator App // Mode: CREATE{' </>'}</h1>
        <hr/>
        <div className="prime-container">
          
          <div>
          <h1>Pokemon Roster List</h1>
            <Search query={this.searchQuery} search={this.searchHandler} />
            <button onClick={this.pokeUndo}>Undo Selection</button><br/>
            <button onClick={() => this.saveRoster(this.state.profile)}>Save Roster</button>
            <PokeList select={this.pokeSelect} pokelist={this.state.pokelist} />
          </div>
          <div>
            
            <div id="poke-roster">
              <Profile profilePic={this.state.profile['1'].profilePic} name={this.state.profile['1'].profileName} />
              <Profile profilePic={this.state.profile['2'].profilePic} name={this.state.profile['2'].profileName} />
              <Profile profilePic={this.state.profile['3'].profilePic} name={this.state.profile['3'].profileName} />
              <Profile profilePic={this.state.profile['4'].profilePic} name={this.state.profile['4'].profileName} />
              <Profile profilePic={this.state.profile['5'].profilePic} name={this.state.profile['5'].profileName} />
              <Profile profilePic={this.state.profile['6'].profilePic} name={this.state.profile['6'].profileName} />
            </div>
          </div>
          <Roster />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));