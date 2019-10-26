/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import SearchBox from './search-box';
import Card from './card';

function App() {
  const [movieInfo, setMovieInfo] = useState({ movieID: 258480 });

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/${movieInfo.movieID}?&api_key=cfe422613b250f702980a3bbf9e90716`;
    fetchApi(url);
  }, []);

  // the api request function
  function fetchApi(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // update state with API data
        setMovieInfo({
          ...movieInfo,
          movieID: data.id,
          original_title: data.original_title,
          tagline: data.tagline,
          overview: data.overview,
          homepage: data.homepage,
          poster: data.poster_path,
          genre: data.genres,
          release: data.release_date,
          vote: data.vote_average,
          runtime: data.runtime,
          revenue: data.revenue,
          backdrop: data.backdrop_path
        });
      })
      .catch(err => console.log('error:', err));
  }

  function fetchMovieID(movieID) {
    let url = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=cfe422613b250f702980a3bbf9e90716`;
    fetchApi(url);
  }

  return (
    <div className="outer-container">
      <div className="app-container">
        <div className="row">
          <div className="col s12 l8 offset-l2">
            <SearchBox fetchMovieID={fetchMovieID} />
            <Card data={movieInfo} />
          </div>
        </div>
        <footer className="footer">
          <span>
            <a href="https://aaronkzhou.github.io/" rel="author">
              Developed by Aaron Zhou
            </a>
          </span>
          <span>
            <a
              href="https://github.com/aaronleslie/Movie_searcher"
              title="View Github Repo"
            >
              View Code
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
