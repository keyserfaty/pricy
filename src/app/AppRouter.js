import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import MainLayout from '../modules/_common/MainLayout/';

import prices from '../modules/prices';

const routes = (
  <Route path='/'>
    <Route component={MainLayout}>
      <IndexRedirect to='prices' />
      <Route path='prices'>
        <IndexRoute component={prices.scenes.list} />
      </Route>
    </Route>
  </Route>
);

export default routes;
