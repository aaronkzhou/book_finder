import React, { Component } from 'react';
import Autocomplete from './auto-complete';
import ReactSVG from 'react-svg';
import BookLogo from '../../open-book.svg';

// render one item on the list
const MovieItem = ({ item }) => {
  return (
    <div className="item-data">
      <div className="item-id">{item.id}</div>
      <div className="item-name">{item.name}</div>
    </div>
  );
};

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      selected: undefined
    };
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(item) {
    this.setState({
      selected: item
    });

    this.props.fetchMovieID(item.id);
    return item.name;
  }

  onChange(query) {
    let url = `https://api.themoviedb.org/3/search/movie?query=${query}?&api_key=cfe422613b250f702980a3bbf9e90716`;
    let movieList = [];

    fetch(url)
      .then(response => response.json())
      .then(movies => {
        movies.results.forEach(function(movie) {
          movieList.push({
            name: movie.original_title,
            id: movie.id
          });
        });
        movieList = movieList.slice(0, 5);

        this.refs.autocomplete.setItems(movieList);
      });
  }

  render() {
    return (
      <div className="col s12 search-container nopadding">
        <div className="col s12 m6 l5">
          <a href="./" title="ReactJS TMDb Movie Search">
            <ReactSVG src={BookLogo} className="logo" />
          </a>
        </div>
        <div className="col s12 m6 l7">
          <Autocomplete
            ref="autocomplete"
            renderItem={MovieItem}
            onChange={this.onChange}
            onSelect={this.onSelect}
            placeholder="Search Book Title..."
          />
        </div>
      </div>
    );
  }
}

export default SearchBox;
