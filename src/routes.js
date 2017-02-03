import React from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Route, IndexRoute, browserHistory, Router} from 'react-router';
import {reducers} from './reducers';
import App from './components/app';
import MoviesIndex from './components/movies-index';
import Movie from './components/show_page/movies-show';

export default(
    <Route path= '/' component={App}>
      <IndexRoute component={MoviesIndex} />
      <Route path='movies/:id' component={Movie} />
   </Route>
)
