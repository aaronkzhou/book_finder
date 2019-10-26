import React from 'react';
import numeral from 'numeral';

let backdropIMG;

function Card({ data }) {
  let posterIMG = 'https://image.tmdb.org/t/p/w500' + data.poster,
    genres = data.genre,
    totalRevenue = data.revenue,
    noData = '-',
    genresList = nestedDataToString(genres);
  backdropIMG = 'https://image.tmdb.org/t/p/original' + data.backdrop;
  document.body.style.backgroundImage = 'url(' + backdropIMG + ')';
  // conditional statements for no data
  if (data.vote === 'undefined' || data.vote === 0) {
    data.vote = noData;
  } else {
    data.vote = data.vote + ' / 10';
  }

  if (totalRevenue === 'undefined' || totalRevenue === 0) {
    totalRevenue = noData;
  } else {
    totalRevenue = numeral(data.revenue).format('($0,0)');
  }

  if (data.poster == null) {
    posterIMG =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g';
  }

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
                <span className="meta-data">{data.release}</span>
              </div>
              <div className="col s6 nopadding">
                Running Time:
                <span className="meta-data">{data.runtime} mins</span>
              </div>
              <div className="col s6 nopadding">
                Box Office:
                <span className="meta-data">{totalRevenue}</span>
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
        <img id="postertest" className="poster" src={posterIMG} alt="-" />
      </div>
    </div>
  );
}

function nestedDataToString(nestedData) {
  let nestedArray = [],
    resultString;

  if (typeof nestedData !== 'undefined') {
    nestedData.forEach(function(item, i) {
      nestedArray.push(item.name);
    });

    resultString = nestedArray.join(', ');
    return resultString;
  }

  return false;
}

export default Card;
