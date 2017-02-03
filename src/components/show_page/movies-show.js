import React, {Component} from 'react';
import {connect} from 'react-redux';
import CommentInput from './comment-input';
import MovieSearch from './movie-search';
import Categories from './categories';
import Actors from './actors';
import MovieDetail from './movie-detail';
import Comments from './comments';
import MovieSlider from '../movie-slider';
import {getMovieInfo, deleteSearchedMovie, resetState} from '../../actions/index';
import {Link} from 'react-router';

import Movies from '../../reducers/reducer-movies.js'

class Movie extends Component{


  componentWillMount(){
    this.props.resetState();
    this.props.getMovieInfo(this.props.params.id);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.params.id != nextProps.params.id){
      this.props.resetState();
      this.props.getMovieInfo(nextProps.params.id);
    }
  }

  render(){
    console.log(this.props.movie)
    if (!this.props.movie){
      return <div className="w3-center"><img src="http://etechcorners.devhtmlfive.com/wp-content/uploads/2014/12/loader.gif"></img></div>
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
                <MovieSlider movie_list={this.props.movie.similar_movies}/>
                <hr/>
              </div>
                <CommentInput/>
                <hr/>
                <Comments/>
            </div>
          <div className="col-md-4">
            <MovieSearch/>
              <Categories genres={this.props.movie.genres}/>
              <Actors actors={this.props.movie.cast}/>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {movie: state.movies.movie}
}

export default connect(mapStateToProps,{getMovieInfo, resetState})(Movie);
