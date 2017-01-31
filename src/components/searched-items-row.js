import React, {Component} from 'react';
import SearchedItem from './searched-item';

export default class SearchedItemsRow extends Component{

  render(){
    return(
      <div>
        {    this.props.moviesFormatted.map((movies)=>
            <div className="row">
                <SearchedItem movies={movies}/>
            </div>
          )}
      </div>
    )
  }
}
