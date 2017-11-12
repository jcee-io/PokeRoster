import React from 'react';
import ReactDOM from 'react-dom';
import Create from './components/Create.jsx';
import Home from './components/Home.jsx';
import Roster from './components/Roster.jsx';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
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


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster/create' component={Create}/>
      <Route path='/roster' component={RosterView}/>
    </Switch>
  </main>
)

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster/create'>Create Roster</Link></li>
        <li><Link to='/roster'>View Roster</Link></li>
      </ul>
    </nav>
  </header>
);

const App = () => (
  <div>
    <Header />
    <hr />
    <Main />
  </div>
);


ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('app'));