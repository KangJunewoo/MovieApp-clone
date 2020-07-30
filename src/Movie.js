import React from "react";
import PropTypes from 'prop-types';
import "./Movie.css";

// state가 필요없는 경우 굳이 클래스형이 아니어도 됨. 함수형도 무방.
function Movie({id, year, title, summary, poster, genres}){
  return(
    // jsx에선 class 대신 className을 쓴다.
    <div className="movie">
      <img src={poster} alt={title} title={title}/>
      <div className="movie_>_data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
        <ul className="genres">
          {genres.map((genre, index) =>
            // map함수에도 key추가 필요함.
            <li key={index} className="genres__genre">
              {genre}
            </li>
            )}
        </ul>
      </div>
    </div>
  )
}

Movie.propTypes={
  id:PropTypes.number.isRequired,
  year:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;