import React, {Component} from 'react';
const URL = "http://image.tmdb.org/t/p/w154/"
const MovieIcon = (props)=>{
  return(
    <div><img alt={props.movie.post_path} src={`${URL}${props.movie.poster_path}`}/></div>
  )
}

export default MovieIcon;



// <div>
// <img alt={this.props.movie.post_path} src={`${URL}${props.movie.post_path}`}/>
// <p>{props.title}"("{props.release_date}")"</p>
// </div>
