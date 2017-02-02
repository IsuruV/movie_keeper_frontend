import React, {Component} from 'react';
import {connect} from 'react-redux';

import axios from 'axios';
const ROOT_URL = 'http://localhost:3000'
export const GET_MOVIE = 'GET_MOVIE';

import CommentInput from './comment-input';
import MovieSearch from './movie-search';
import Categories from './categories';
import Actors from './actors';
import MovieDetail from './movie-detail';
import Comments from './comments';
import MovieSlider from '../movie-slider';

function getMovieInfo(id){
  const request = axios.get(`${ROOT_URL}/movies/${id}.json`);
  return{
    type: GET_MOVIE,
    payload: request
  }
}

function resetState(){
  return{
    type: RESET_STATE
  }
}

class Movie extends Component{
  componentWillMount(){
    this.props.getMovieInfo(this.props.params.id);
  }

  render(){
    console.log(this.props.movie)
    if (!this.props.movie){
      return <div> Loading..</div>
    }
    return(
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <MovieDetail movie={this.props.movie}/>
                <hr/>
                <div className="well w3-light-grey">
                  <h3>Similar Movies</h3>
                  <MovieSlider movie_list={this.props.movie.similar_movies} onShowPage={true}/>
                  <hr/>
                </div>
                  <CommentInput/>
                  <hr/>
                  <Comments/>
              </div>
            <div className="col-md-4">
              <MovieSearch/>
                <Categories/>
                <Actors actors={this.props.movie.cast}/>
            </div>
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {movie: state.movie.movie}
}

export default connect(mapStateToProps,{getMovieInfo, resetState})(Movie);
