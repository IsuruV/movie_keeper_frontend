import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import MoviesIndex from './components/movies-index';

export default(
  <Route path= '/' component={App}>
    <IndexRoute component={MoviesIndex} />
  </Route>
)
