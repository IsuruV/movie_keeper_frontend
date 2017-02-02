import React, {Component} from 'react';

class MovieSearch extends Component{
  render(){
    return(
      <div className="well w3-pale-green">
          <h4>Blog Search</h4>
          <div className="input-group">
              <input type="text" className="form-control"/>
              <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                      <span className="glyphicon glyphicon-search"></span>
              </button>
              </span>
          </div>
      </div>
    )
  }
}

export default MovieSearch
