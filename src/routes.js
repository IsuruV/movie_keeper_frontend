import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import MoviesIndex from './components/movies-index';
import Movie from './components/show_page/movies-show';

export default(
  <Route path= '/' component={App}>
    <IndexRoute component={MoviesIndex} />
    <Route path="movies/:id" component={Movie} />
  </Route>
)
