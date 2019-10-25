import React, { Component } from 'react';
import Autocomplete from "./auto-complete";

const TMDBLogo = 'https://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg';

// render one item on the list
const MovieItem = function({ item }) {
    return (
        <div className="user-data">
            <div className="user-id">{item.id}</div>
            <div className="user-name">{item.name}</div>
        </div>
    );
}

class SearchBox extends Component {
    constructor() {
        super();
        this.state = {
            selected: undefined
        }
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    render() {
        return (
            <div className="col s12 search-container nopadding">
                <div className="row">
                    <div className="col s12 m6 l5">
                        <a href="./" title="ReactJS TMDb Movie Search"><img src={TMDBLogo} className="logo" alt="The Movie Database" /></a>
                    </div>
                    <div className="col s12 m6 l7">
                        <Autocomplete
                            ref="autocomplete"
                            renderItem={MovieItem}
                            onChange={this.onChange}
                            onSelect={this.onSelect}
                            placeholder="Search Movie Title..."
                        />
                    </div>
                </div>
            </div>
        );
    }

    onSelect(item) {
    }
    onChange(query) {
    }
    }

export default SearchBox;
