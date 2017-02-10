import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getMovieList} from '../actions/index';
import {URL} from './movie-icon';

class WatchList extends Component{
  onClick(ev){
    ev.preventDefault();
    this.props.getMovieList(this.props.fb_id);
  }
  componentWillMount(){
    this.props.getMovieList(this.props.fb_id);
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
            <Link id="list-movie" to={"/movies/"+movie.movie_id}><div id={movie.id}>{`${movie.title}`}</div></Link>
          </div>):
        <div> No Movies added </div>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {watch_list: state.movies.movie_list, fb_id: state.movies.fb_id}
}
export default connect(mapStateToProps, {getMovieList})(WatchList);



// <div className="dropdown show">
//   <a className="btn btn-secondary btn-lg dropdown-toggle w3-light-grey"  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     Watch List
//   </a>
//   <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//     {this.props.watch_list?
//       this.props.watch_list.map((movie)=>
//     <div className="dropdown-item">
//       <div id={movie.id}>{`${movie.title}`}</div>
//     </div>):
//   <div> No Movies added </div>}
//   </div>
// </div>
