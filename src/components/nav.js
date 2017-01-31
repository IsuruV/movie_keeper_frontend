import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {searchMovies, searchMoviesSubmit, deleteSearchedMovie} from '../actions/index';
import MovieIcon from './movie-icon';

class NaveBar extends Component{
    constructor(props){
      super(props);
      this.state ={search_term: null}
    }
    onSearch(ev){
      // debugger;
      if(ev.target.value.length > 2){
        this.props.searchMovies(ev.target.value);
        this.setState({search_term: ev.target.value});
      }else{
        this.setState({search_term: null});
        this.props.deleteSearchedMovie();
    }
    }

    formSubmission(ev){
      ev.preventDefault();
      this.props.searchMoviesSubmit(this.state.search_term);
      this.setState({search_term: null});
    }

 render(){
   console.log(this.props.search)
   this.props.search ? console.log(this.props.search.title) : null
   return(
     <div>
     <div id="jumbotron" className="jumbotron w3-pale-green">
       <h1>Movie Genesis</h1>
       <p>Search. Save. Watch</p>
       <form onSubmit={this.formSubmission.bind(this)}>
         <div className="input-group">
          <ul>
           <input type="text" className="form-control"  placeholder="Movie Title" onChange={this.onSearch.bind(this)} required/>
           </ul>
           <div className="input-group-btn">
             <button type="button" className="btn btn-danger">Search</button>
           </div>
         </div>
       </form>
       {this.state.search_term ?
       <div id="search_results" className="w3-white">
        <ul id="possible-search-term">
          {this.props.search.slice(0,5).map(movie => <ol> <MovieIcon id={"search-icon"} img_id={"search-text"} vertical={true} movie={movie}/> </ol> )}
        </ul>
       </div>
       : null }
     </div>
     </div>
   )
 }
}

function mapStateToProps(state){
  return {search: state.movies.search}
}

export default connect(mapStateToProps, {searchMovies, searchMoviesSubmit, deleteSearchedMovie})(NaveBar);
