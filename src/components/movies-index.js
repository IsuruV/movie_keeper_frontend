import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
import NaveBar from './nav';
import MovieSlider from './movie-slider';
import SearchedItemsIndex from './searched-items-index';
import MovieIndexIcons from './movie-index-icons'
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
    return(
      <div>
        <NaveBar/>
        <MovieIndexIcons/>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {most_popular: state.movies.most_popular, highly_rated: state.movies.highly_rated, in_theaters: state.movies.in_theaters}
}


export default connect(mapStateToProps, {fetchMostPopular, fetchHighlyRated, fetchInTheaters})(MoviesIndex);
