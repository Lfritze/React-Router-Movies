import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path = '/' component = {MovieList} />
      <Route path = '/movies/:id' render={props => <Movie {...props} addToSavedList = {this.addToSavedList} /> } />
    </div>
  );
};

export default App;


// Inside your App file add two routes.
// one route for / that loads the MovieList component.
// one route that will take an id parameter after/movies/ (ex: /movies/2, /movies/3 where the id is dynamic). This route should load the Movie component.