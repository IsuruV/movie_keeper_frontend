import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
import NaveBar from './nav';
import MovieSlider from './movie-slider';

import {fetchMostPopular, fetchHighlyRated, fetchInTheaters} from '../actions/index.js'

import Movies from '../reducers/reducer-movies.js'

import axios from 'axios';

const ROOT_URL = 'http://localhost:3000'

class MoviesIndex extends Component{

  componentWillMount(){
    this.props.fetchMostPopular();
    this.props.fetchHighlyRated();
    this.props.fetchInTheaters();
  }
  render(){
    if(this.props.most_popular.length == 0 || this.props.highly_rated.length == 0 || this.props.in_theaters.length  == 0 ){
        return (<div> Loading... </div>)
    }
    console.log("popular",this.props.most_popular)
    // console.log("highly_rated",this.props.highly_rated)
    // console.log("in_theaters",this.props.in_theaters)
    return(
      <div>
        <NaveBar/>
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

function mapStateToProps(state){
  return {most_popular: state.movies.most_popular, highly_rated: state.movies.highly_rated, in_theaters: state.movies.in_theaters}
}


export default connect(mapStateToProps, {fetchMostPopular, fetchHighlyRated, fetchInTheaters})(MoviesIndex);
