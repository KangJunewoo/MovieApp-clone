import React from "react";
import PropTypes from 'prop-types';

// state가 필요없는 경우 굳이 클래스형이 아니어도 됨. 함수형도 무방.
function Movie({id, year, title, summary, poster}){
  return <h4>{title}</h4>
}

Movie.propTypes={
  id:PropTypes.number.isRequired,
  year:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired
}

export default Movie;