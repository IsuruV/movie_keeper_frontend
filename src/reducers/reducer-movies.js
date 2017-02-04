import {FETCH_POPULAR, FETCH_RATED, FETCH_THEATER, SEARCH, SEARCH_SUBMIT, DELETE_SEARCH, RESET_STATE, GET_MOVIE, GET_LINKS} from '../actions/index';
const INITAL_STATE = {most_popular: [], highly_rated: [], in_theaters: [], search: null, searchedMovie: null, movie: null, links: null}

export default function(state = INITAL_STATE, action){
  switch(action.type){
    case FETCH_POPULAR:
      return {...state, most_popular: action.payload.data}
    case FETCH_RATED:
      return {...state, highly_rated: action.payload.data}
    case FETCH_THEATER:
      return {...state, in_theaters: action.payload.data}
    case SEARCH:
      return {...state, search: action.payload.data}
    case SEARCH_SUBMIT:
      debugger;
      return {...state, searchedMovie: action.payload.data}
    case DELETE_SEARCH:
      return {...state, searchedMovie: null}
    case GET_MOVIE:
      return {...state, movie: action.payload.data}
    case RESET_STATE:
      return {...state, movie: null }
    case GET_LINKS:
      return {...state, links: action.payload.data}
    default:
      return state;
  }
}
