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
    console.log("popular",this.props.most_popular)
    console.log("highly_rated",this.props.highly_rated)
    console.log("in_theaters",this.props.in_theaters)
    return(
      <div>
        <NaveBar/>
          <MovieSlider/>
          <br/><br/><br/>
          <MovieSlider/>
          <br/><br/><br/>
          <MovieSlider/>
          <br/><br/><br/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {most_popular: state.movies.most_popular, highly_rated: state.movies.highly_rated, in_theaters: state.movies.in_theaters}
}


export default connect(mapStateToProps, {fetchMostPopular, fetchHighlyRated, fetchInTheaters})(MoviesIndex);
