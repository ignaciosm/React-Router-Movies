import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"

import SavedList from './Movies/SavedList';


const App = () => {
  const [savedList, setSavedList] = useState( [] ); 

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  const [movies, setMovies] = useState([]);
  console.log('movies', movies)
  
  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" render={props => <MovieList {...props} setMovies={setMovies} movies={movies} />} />
      <Route exact path="/movies/:id" render={props => <Movie {...props} setMovies={setMovies} movies={movies} />} />
    </div>
  );
};

export default App;
