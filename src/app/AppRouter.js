import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import MainLayout from '../modules/_common/MainLayout/';

import prices from '../modules/prices';
import config from '../modules/config';

const routes = (
  <Route path='/'>
    <Route component={MainLayout}>
      <IndexRedirect to='prices' />
      <Route path='prices' component={prices.scenes.list} />
      <Route path='config' component={config.scenes.edit} />
    </Route>
  </Route>
);

export default routes;
