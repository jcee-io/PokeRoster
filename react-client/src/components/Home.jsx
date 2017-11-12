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
          The speed of the pokeapi (it generates more than just the sprite image) clocks out to be just around 500ms
          per pokemon (it only takes single entry), please wait for a little white before selecting your pokemon when
          creating your roster.
        </li>
        <li>
          Each selection generates 10 results at most and bases it off of the first letter of your search, please be
          more specific when trying to find your pokemon (this is to limit the amount of api calls in the query)
        </li>
        <li>
          Alola generation pokemon come up in the query, but DOES NOT exist in the pokeapi, refrain from attempting to
          select them (again this is an MVP that took three days to make).
        </li>
        <li>
          There will be three lengths in the navbar, one for this homepage, one for the creation of the rosters, and one
          to view those rosters.
        </li>
        </strong>
      </ul>
      <h3>That said, now that you've gotten that out of the way, enjoy exploring this app I've made! -Justin</h3>
    </div>
  </div>
);


export default Home;