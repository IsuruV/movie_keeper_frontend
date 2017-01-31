import React, {Component} from 'react';
import {Link} from 'react-router';
const URL = "http://image.tmdb.org/t/p/w154/"

class MovieIcon extends Component{

  onClick(ev){
    ev.preventDefault();
    var id = ev.target.id;
  }
  getYear(date_string){
    var miliSec = Date.parse(date_string);
    var newDate = new Date(miliSec);
    return newDate.getFullYear();

  }
  render(){

  if (this.props.vertical){
    return(
      <div>
      <div><Link to={"movies/"+this.props.movie.id}>{`${this.props.movie.title} (${this.getYear(this.props.movie.release_date)})`}</Link></div>
      </div>
    )
  }else {
    return(
      <div id={this.props.id}>
      <Link to={"movies/"+this.props.movie.id}>
        <img alt={this.props.movie.poster_path} src={`${URL}${this.props.movie.poster_path}`}/>
      </Link>
        <Link to={"movies/"+this.props.movie.id}><div id={this.props.img_id}>{`${this.props.movie.title}(${this.getYear(this.props.movie.release_date)})`}</div></Link>
      </div>
    )
    }

  }
}

export default MovieIcon;




// const MovieIcon = (props)=>{
//   if (props.vertical){
//     return(
//       <div>
//       <div><a>{props.movie.title}</a></div>
//       </div>
//     )
//   }else {
//     return(
//       <div id={props.id}>
//         <img alt={props.movie.poster_path} src={`${URL}${props.movie.poster_path}`}/>
//         <div id={props.img_id}>{props.movie.title}</div>
//       </div>
//     )
//   }
//
// }
//
//
// export default MovieIcon;
