import React, { Component } from 'react';
import SearchBox from './search';
import Card from './card';

class App extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div className="outer-container">
                <div className="app-container">
                    <div className="row">
                        <div className="col s12 l8 offset-l2">
                            <SearchBox fetchMovieID={this.fetchMovieID.bind(this)}/>
                            <Card data={this.state}/>
                        </div>
                    </div>
                    <footer className="footer">
                        <span
                        ><a href="https://aaronkzhou.github.io/" rel="author"
                            >Developed by Aaron Zhou</a>
                        </span>
                        <span
                        ><a
                            href="https://github.com/aaronleslie/Movie_searcher"
                            title="View Github Repo"
                            >View Code</a></span>
                    </footer>
                </div>
          </div>
        )
    }
    }

export default App;
