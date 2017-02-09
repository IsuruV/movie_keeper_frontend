import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addMovie} from '../../actions/index';

class AddMovie extends Component{

  addMovie(ev){
    ev.preventDefault();
    // debugger;
    this.props.addMovie(this.props.movie, this.props.fb_id)
  }
  render(){
    return(
      <div>
        <button className="w3-btn w3-red" onClick={this.addMovie.bind(this)}>Add to Watch List</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {movie: state.movies.movie, fb_id: state.movies.fb_id}
}

export default connect(mapStateToProps,{addMovie})(AddMovie);
