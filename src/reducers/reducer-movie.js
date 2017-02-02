import {GET_MOVIE} from '../actions/index';
const INITAL_STATE = {movie: null};

export default function(state = INITAL_STATE, action){
  switch(action.type){
    case GET_MOVIE:
      return {...state, movie: action.payload.data}
    default:
      return state;
  }
}
