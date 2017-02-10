import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {getMovieInfo} from '../actions/index';

import {connect} from 'react-redux';

export const URL = "http://image.tmdb.org/t/p/w154/"

class MovieIcon extends Component{

  // onClick(id){
  //   this.props.getMovieInfo(id);
  // }
  getYear(date_string){
    var miliSec = Date.parse(date_string);
    var newDate = new Date(miliSec);
    return newDate.getFullYear();

  }
  render(){

  if (this.props.vertical){
    return(
      <div>
      <div><Link to={"/movies/"+this.props.movie.id}>{`${this.props.movie.title} (${this.getYear(this.props.movie.release_date)})`}</Link></div>
      </div>
    )
  }else {
    return(
      <div id={this.props.id}>
      <Link to={"/movies/"+this.props.movie.id}>
        <img alt={this.props.movie.poster_path} src={`${URL}${this.props.movie.poster_path}`}/>
        <div id={this.props.img_id}>{`${this.props.movie.title}(${this.getYear(this.props.movie.release_date)})`}</div>
      </Link>
      </div>
    )
    }

  }
}

export default MovieIcon;
