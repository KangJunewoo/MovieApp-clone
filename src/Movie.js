import React from "react";
import PropTypes from 'prop-types';
import "./Movie.css";

// state가 필요없는 경우 굳이 클래스형이 아니어도 됨. 함수형도 무방.
function Movie({id, year, title, summary, poster}){
  return(
    <div class="movie">
      <img src={poster} alt={title} title={title}/>
      <div class="movie_>_data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  )
}

Movie.propTypes={
  id:PropTypes.number.isRequired,
  year:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired
}

export default Movie;