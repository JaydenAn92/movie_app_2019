import React from 'react';
import axios from 'axios'
import Movie from './Movie';

class App extends React.Component{
  state = {
    isLoading: true,
    movies:[]
  };
  getMovise = async() => {
    const {
      data:{
        data:{movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    this.setState({movies, isLoading: false})
  }
  componentDidMount(){
    this.getMovise();
  }
  render(){
    const {isLoading, movies} = this.state
    return (
      <div>{isLoading ? 'Loading':movies.map(movie => {
        console.log(movie);
        return <Movie key={movie.id} id={movie.id} year={movie.yaer} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}></Movie>
      })}</div>
    )
  }
}

export default App;
