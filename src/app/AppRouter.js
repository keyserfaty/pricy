import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import LayoutContainer from '../modules/_common/MainLayout';

import prices from '../modules/prices';

const routes = (
  <Route path='/'>
    <Route component={LayoutContainer}>
      <IndexRedirect to='prices' />
      <Route path='prices'>
        {/*<IndexRoute component={prices.scenes.list} />*/}
        {/*<Route path='list' component={prices.scenes.list} />*/}
        {/*<Route path='create' component={prices.scenes.create} />*/}
      </Route>

    </Route>
  </Route>
);

export default routes;
