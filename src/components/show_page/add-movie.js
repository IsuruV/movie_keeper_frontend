import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addMovie} from '../../actions/index';

class AddMovie extends Component{

  addMovie(ev){
    ev.preventDefault();
    // debugger;
    this.props.addMovie(this.props.movie, this.props.fb_id)
  }
  checkIfAdded(){
    let watch_list = this.props.watch_list;
    let movie = this.props.movie;
    var exists = '';
    for(var i=0; i< watch_list.length; i++){
      if(watch_list[i].movie_id == movie.id){
        debugger;
        return true;
        break;
      }
    }
  }
  render(){
    return(
      <div>
        {this.checkIfAdded() ? <div></div> : <button className="w3-btn w3-red" onClick={this.addMovie.bind(this)}>Add to Watch List</button> }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {movie: state.movies.movie, fb_id: state.movies.fb_id, watch_list: state.movies.movie_list}
}

export default connect(mapStateToProps,{addMovie})(AddMovie);
