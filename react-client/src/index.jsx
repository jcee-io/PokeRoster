import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import PokeList from './components/PokeList.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pokelist: [],
      query: ''
    }

    //this.pokeRender();
    this.searchHandler = this.searchHandler.bind(this);
    this.searchQuery = this.searchQuery.bind(this);
  }

  pokeRender() {
    $.getJSON('/pokemon', data => {
      console.log(data);
      //this.setState({pokemon: data});
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
    return (<div>
      <h1>Pokemon Roster List</h1>
      <Search query={this.searchQuery} search={this.searchHandler} />
      <div>
        <PokeList pokelist={this.state.pokelist} />
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));