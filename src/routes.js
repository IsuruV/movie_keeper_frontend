import React from 'react';
import {Route, IndexRoute, browserHistory, Router} from 'react-router';
import App from './components/app';
import MoviesIndex from './components/movies-index';
import Movie from './components/show_page/movies-show';

export default(
  <Router history={browserHistory}>
    <Route path= '/' component={App}>
      <IndexRoute component={MoviesIndex} />
      <Route path="movies/:id" component={Movie} />
   </Route>
  </Router>
)
