import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getMovieList, deleteMovie} from '../actions/index';
import {URL} from './movie-icon';

class WatchList extends Component{
  onClick(ev){
    ev.preventDefault();
    this.props.getMovieList(this.props.fb_id);
  }
  deleteMovie(ev){
    ev.preventDefault();
    const movie_id = ev.target['id'];
    this.props.deleteMovie(this.props.fb_id, movie_id);
  }

  componentWillMount(){
    this.props.getMovieList(this.props.fb_id);
  }

  componentShouldUpdate(nextProps,nextState){
    debugger;
  }

  render(){
    return(
      <div className="dropdown show">
        <a className="btn btn-secondary btn-lg dropdown-toggle w3-light-grey"  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Watch List
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {this.props.watch_list?
            this.props.watch_list.map((movie)=>
        <div className="dropdown-item">
            <div id={movie.id}><Link id="list-movie" to={"/movies/"+movie.movie_id}>{`${movie.title}`}</Link>
              <span> </span><a onClick={this.deleteMovie.bind(this)}><span id={movie.movie_id} className="glyphicon glyphicon-remove"></span></a></div>
          </div>):
        <div> No Movies added </div>}
        </div>
      </div>

    )
  }
}

// <ul className="list-group">
//   <li className="list-group-item justify-content-between">
//     <Link id="list-movie" to={"/movies/"+movie.movie_id}>{`${movie.title}`}</Link>
//     <span className="badge badge-default badge-pill">x</span>
//   </li>
// </ul>

function mapStateToProps(state){
  return {watch_list: state.movies.movie_list, fb_id: state.movies.fb_id}
}
export default connect(mapStateToProps, {getMovieList, deleteMovie})(WatchList);


//
// <div className="dropdown show">
//   <a className="btn btn-secondary btn-lg dropdown-toggle w3-light-grey"  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     Watch List
//   </a>
//   <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//     {this.props.watch_list?
//       this.props.watch_list.map((movie)=>
//     <div className="dropdown-item">
//       <Link id="list-movie" to={"/movies/"+movie.movie_id}><div id={movie.id}>{`${movie.title}`}</div></Link>
//     </div>):
//   <div> No Movies added </div>}
//   </div>
// </div>
