import React from 'react';
import { Switch, Route } from 'react-router-dom';

import _404 from '~/pages/404';

import Home from '~/pages/Home';
import Page from '~/pages/Page';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/page" component={Page} />

      <Route path="/" component={_404} />
    </Switch>
  );
}
