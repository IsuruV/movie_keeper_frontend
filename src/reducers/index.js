import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import MoviesReducer from './reducer-movies';
import MovieReducer from './reducer-movie';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  movie: MovieReducer,
  form: formReducer
});

export default rootReducer;
