import React from 'react';

const Home = () => (
  <div>
    <h1 style={{textAlign: 'center'}}>{'</> '}Pokemon Roster Creator App // Home Page{' </>'}</h1>
    <hr/>
    <div id="home-body">
      <h2 style={{textAlign: 'center'}}>***READ THIS SMALL DOCUMENTATION BEFORE USING THE APP***</h2>
      <h3>
        Welcome to the MVP project created for as a class project, there are several things about this application
        where it would be best to inform you of the features and limits of this MVP. That said, please do enjoying
        exploring the app and its features. That said, these are the features and limitations as stated:
      </h3>
      <ul>
        <strong>
        <li>
          You can start looking for pokemon on the create page on the left hand side on the text input.
        </li>
        <li>
          Alola generation (aka Sun/Moon) pokemon DO NOT exist in the images (I've made sure the couldn't be searched)
        </li>
        <li>
          There will be three lengths in the navbar, one for this homepage, one for the creation of the rosters, and one
          to view those rosters.
        </li>
        <li>
          For best results, please do teams of six pokemon.
        </li>
        </strong>
      </ul>
      <h3>That said, now that you've gotten that out of the way, enjoy exploring this app I've made! -Justin</h3>
    </div>
  </div>
);


export default Home;