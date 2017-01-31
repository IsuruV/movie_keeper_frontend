import React, {Component} from 'react';
import MovieSlider from './movie-slider';
import NaveBar from './nav-bar';
import SearchedItemsIndex from './searched-items-index';
import {connect} from 'react-redux';


class MovieIndexIcons extends Component{
  render(){

 if (this.props.searchedMovie){
   return(
     <div>
       <SearchedItemsIndex/>
     </div>
   )
 }else if ((!this.props.searchedMovie) && (this.props.most_popular || this.props.highly_rated || this.props.in_theaters)){
   return(
     <div>
       <h3> Most Popular </h3>
        <div id="list" className="jumbotron w3-light-grey">
           <MovieSlider movie_list={this.props.most_popular}/>
         </div>
         <h3> Highly Rated </h3>
         <div id="list" className="jumbotron w3-light-grey">
           <MovieSlider movie_list={this.props.highly_rated}/>
         </div>
         <h3> In Theaters </h3>
         <div id="list" className="jumbotron w3-light-grey">
           <MovieSlider movie_list={this.props.in_theaters}/>
         </div>
     </div>
   )
 }
 }
}

function mapStateToProps(state){
  return {most_popular: state.movies.most_popular, highly_rated: state.movies.highly_rated, in_theaters: state.movies.in_theaters, searchedMovie: state.movies.searchedMovie}
}

export default connect(mapStateToProps, null)(MovieIndexIcons);
