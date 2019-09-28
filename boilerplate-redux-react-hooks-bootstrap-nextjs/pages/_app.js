import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { compose } from 'recompose';

import withReduxStore from '~/hocs/with-redux-store';
import withAnalytics from '~/hocs/with-analytics';

import 'bootstrap/dist/css/bootstrap.min.css';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default compose(
  withAnalytics,
  withReduxStore
)(MyApp);
