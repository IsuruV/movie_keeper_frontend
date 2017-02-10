import React, {Component} from 'react';
import {connect} from 'react-redux';
import CommentForm from './comment-form';
import MovieSearch from './movie-search';
import Categories from './categories';
import Actors from './actors';
import MovieDetail from './movie-detail';
import Comments from './comments';
import MovieSlider from '../movie-slider';
import {getMovieInfo, deleteSearchedMovie, resetState} from '../../actions/index';
import {Link} from 'react-router';
import Modal from 'react-modal';
import Links from './links';
import Movies from '../../reducers/reducer-movies.js'
import FbComments from './fb-comments';
import FbLogin from '../fb-login';
// import FacebookProvider, { Comments } from 'react-facebook';

class Movie extends Component{

  componentWillMount(){
    // this.props.resetState();
    this.props.getMovieInfo(this.props.params.id);
  }

  componentWillReceiveProps(nextProps){

    if (this.props.params.id != nextProps.params.id){
      // this.props.resetState();
      this.props.getMovieInfo(nextProps.params.id);
    }
  }
  componentWillUnmount(){
    // debugger;
    this.props.resetState();
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
              <h3>Similar Movies</h3>
              <div className="well w3-light-grey">
                <MovieSlider movie_list={this.props.movie.similar_movies}/>
                <hr/>
              </div>
                <hr/>
                <hr/>
                <FbComments movieId={this.props.params.id}/>
            </div>
          <div className="col-md-4">
            <h4>Movie Search</h4>
            <MovieSearch/>
              <h4 className="">Genres</h4>
              <Categories genres={this.props.movie.genres}/>
              <h3> Actors </h3>
              <Actors actors={this.props.movie.cast}/>
          </div>
          </div>
        </div>
        <Links title={this.props.movie.title} links={'this.props.movie.watch_links'}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {movie: state.movies.movie}
}

export default connect(mapStateToProps,{getMovieInfo, resetState})(Movie);
