import {GET_MOVIE,RESET_STATE } from '../actions/index';
const INITAL_STATE = {movie: null};

export default function(state = INITAL_STATE, action){
  switch(action.type){
    case GET_MOVIE:
      return {...state, movie: action.payload.data}
    case RESET_STATE:
      return {...state, movie: null}
    default:
      return state;
  }
}
