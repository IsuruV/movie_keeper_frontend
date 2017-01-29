import {FETCH_POPULAR, FETCH_RATED, FETCH_THEATER} from '../actions/index';
const INITAL_STATE = {most_popular: [], highly_rated: [], in_theaters: []}

export default function(state = INITAL_STATE, action){
  switch(action.type){
    case FETCH_POPULAR:
      return {...state, most_popular: action.payload.data}
    case FETCH_RATED:
      return {...state, highly_rated: action.payload.data}
    case FETCH_THEATER:
      return {...state, in_theaters: action.payload.data}
    default:
      return state;
  }
}
