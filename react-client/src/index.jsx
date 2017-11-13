import React from 'react';
import ReactDOM from 'react-dom';
import Create from './components/Create.jsx';
import Home from './components/Home.jsx';
import RosterView from './components/RosterView.jsx';
import RosterInfo from './components/RosterInfo.jsx';
import RosterListEntry from './components/RosterEntryList.jsx';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import $ from 'jquery';

const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={RosterView}/>
    <Route path='/roster/:id' component={RosterInfo} handler={RosterListEntry}/>
  </Switch>
)


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster/create' component={Create}/>
      <Route path='/roster' component={Roster}/>
    </Switch>
  </main>
)

const Header = () => (
  <header>
    <nav>
        <div className='link'><Link to='/'>Home</Link></div>
        <div className='link'><Link to='/roster/create'>Create Roster</Link></div>
        <div className='link'><Link to='/roster'>View Roster</Link></div>
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