import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import MoviesReducer from './reducer-movies.js'

const rootReducer = combineReducers({
  movies: MoviesReducer,
  form: formReducer
});

export default rootReducer;
