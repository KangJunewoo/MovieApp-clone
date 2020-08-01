import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  // 데이터 받는법 : fetch vs axios : 이번엔 axios를 쓰지만 fetch도 알아놓자.
  getMovies = async () => {
    // 순수 데이터는 movies.data.data.movies에 있음. es6문법 총집합이네..
    const { data: { data: { movies } } } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false });
    // this.setState({movies : movies})
  }

  // async componentDidMount(){
  //   const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
  // };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return(
      <section className='container'>
        {isLoading ?(
          <div className='loader'>
            <span className='loader__text'>Loading...</span>
          </div>
          ): (
            <div className="movies">
              {movies.map(movie=>(
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  poster={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              ))}
            </div>
          )}
    
      </section>
    )
  }
}

export default Home;
