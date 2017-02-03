import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import MovieIcon from '../movie-icon';
import {searchMoviesSubmit, deleteSearchedMovie, searchMovies} from '../../actions/index';


class MovieSearch extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

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

  onSubmission(props){
    this.props.searchMoviesSubmit(props.searchTerm).then(()=>{
      this.context.router.push('/')
    })
  }

  render(){
    console.log(this.state.search_term);
    const {fields: {searchTerm}, handleSubmit} = this.props;
    return(
    <div>
      <form onSubmit={handleSubmit(this.onSubmission.bind(this))}>
      <div className="well w3-pale-green">
          <h4>Movie Search</h4>
          <div className="input-group">
              <input type="text" className="form-control" {...searchTerm} onChange={this.onSearch.bind(this)}/>
              <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                      <span className="glyphicon glyphicon-search"></span>
              </button>
              </span>
          </div>
          {this.state.search_term ?
          <div className="w3-white">
           <ul>
             {this.props.search.slice(0,5).map(movie => <ol> <MovieIcon id={"search-icon"} img_id={"search-text"} vertical={true} movie={movie}/> </ol> )}
           </ul>
          </div>
          : null }
      </div>
        </form>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {search: state.movies.search}
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['searchTerm']
},mapStateToProps, {searchMoviesSubmit, searchMovies, deleteSearchedMovie})(MovieSearch);
