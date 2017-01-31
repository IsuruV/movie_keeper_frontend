import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchedItemsRow from './searched-items-row';
import SearchedItem from './searched-item';

class SearchedItemsIndex extends Component{
  constructor(props){
    super(props);
    this.state={moviesFormatted: []}
  }
  splitMovies(movies){
    var moviesArray = [];
    if ((movies.length != 0) && (movies.length % 4 == 0)){
          var length = movies.length;
          for(var i=0; i<length / 4; i++){

            var x = movies.splice(0,4);
            moviesArray.push(x);
          }
      this.setState({moviesFormatted: moviesArray});
    }else if (movies.length === 0){
      return moviesArray
    }else{
      var remainder = movies.length%4;
      var length = movies.length-remainder;
      for (var i=0; i< length/4; i++){
        var x = movies.splice(0,4);
        moviesArray.push(x);
      }
      moviesArray.push(movies);
      this.setState({moviesFormatted: moviesArray});
    }
  }

  componentWillMount(){
    var movies = this.props.searchedMovies
    this.splitMovies(movies);
    // debugger;
  }
  render(){
    console.log(this.state.moviesFormatted);
    return(
      <div className="album text-muted">
            <div className="container">
               <SearchedItemsRow moviesFormatted={this.state.moviesFormatted}/>
            </div>
          </div>
    )
  }
}

function mapStateToProps(state){

}

export default SearchedItemsIndex
