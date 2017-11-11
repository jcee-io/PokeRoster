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
    this.state = { 
      pokelist: [],
      query: '',
      profilePic: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
      profileName: 'Mewtwo'
    }

    //this.pokeRender();
    this.searchHandler = this.searchHandler.bind(this);
    this.searchQuery = this.searchQuery.bind(this);
    this.pokeSelect = this.pokeSelect.bind(this);
  }

  pokeSelect(pokemon) {
    console.log(pokemon);
    $.post('/acquire',{pokemon: pokemon});

    this.pokeRender();

  }

  pokeRender() {
    $.getJSON('/acquire', data => {
      console.log(data);
      this.setState({
        profilePic: data.photo,
        profileName: data.name
      });

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
  render () {
    return (
      <div className="prime-container">
        <div>
        <h1>Pokemon Roster List</h1>
        <Search query={this.searchQuery} search={this.searchHandler} />
        <PokeList select={this.pokeSelect} pokelist={this.state.pokelist} />
        </div>
        <Profile profilePic={this.state.profilePic} name={this.state.profileName} />
        <Roster />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));