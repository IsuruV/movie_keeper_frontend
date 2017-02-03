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


class Movie extends Component{
  componentWillMount(){
    this.props.getMovieInfo(this.props.params.id);
  }

  render(){
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
  return {movie: state.movie.movie}
}

export default connect(mapStateToProps,{getMovieInfo, resetState})(Movie);
