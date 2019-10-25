import React, { Component } from 'react';
class Card extends Component {
    render() {
        return (
            <div className="col s12 cardcont nopadding">
                <div className="meta-data-container col s12 l7 push-l5">
                    <div className="meta-data-container">
                        <h1>{data.original_title}</h1>
                        <span className="tagline">{data.tagline}</span>
                        <p>{data.overview}</p>
                        <div className="additional-details">
                            <span className="genre-list">{genresList}</span>
                            <div className="row nopadding release-details">
                                <div className="col s6 nopadding">
                                    Original Release:
                                    <span className="meta-data">
                                        {data.release}
                                    </span>
                                </div>
                                <div className="col s6 nopadding">
                                    Running Time:
                                    <span className="meta-data">
                                        {data.runtime} mins
                                    </span>
                                </div>
                                <div className="col s6 nopadding">
                                    Box Office:
                                    <span className="meta-data">
                                        {totalRevenue}
                                    </span>
                                </div>
                                <div className="col s6 nopadding">
                                    Vote Average:
                                    <span className="meta-data">{data.vote}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="poster-container nopadding col s12 l5 pull-l7 ">
                    <img
                        id="postertest"
                        className="poster"
                        src={posterIMG}
                        alt="-"
                    />
                </div>
            </div>
        );
    }
}

export default Card;
