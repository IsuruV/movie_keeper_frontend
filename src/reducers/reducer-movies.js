import {FETCH_POPULAR, FETCH_RATED, FETCH_THEATER, SEARCH, SEARCH_SUBMIT} from '../actions/index';
const INITAL_STATE = {most_popular: [], highly_rated: [], in_theaters: [], search: null, searchedMovie: null}

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
      
      return {...state, searchedMovie: action.payload.data}
    default:
      return state;
  }
}
