import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {searchMovies} from '../actions/index';
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
        this.setState({search_term: "results"});
      }else{
        this.setState({search_term: null});
    }
    }

 render(){
   console.log(this.props.search)
   this.props.search ? console.log(this.props.search.title) : null
   return(
     <div>
     <div id="jumbotron" className="jumbotron w3-pale-green">
       <h1>Movie Genesis</h1>
       <p>Search. Save. Watch</p>
       <form>
         <div className="input-group">
          <ul>
           <input type="email" className="form-control"  placeholder="Movie Title" required onChange={this.onSearch.bind(this)}/>
           </ul>
           <div className="input-group-btn">
             <button type="button" className="btn btn-danger">Search</button>
           </div>
         </div>
       </form>
       {this.state.search_term ?
       <div id="search_results" className="w3-white">
        <ul>
          {this.props.search.map(movie => <ol> <MovieIcon id={"search-icon"} movie={movie}/> </ol> )}
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

export default connect(mapStateToProps, {searchMovies})(NaveBar);
