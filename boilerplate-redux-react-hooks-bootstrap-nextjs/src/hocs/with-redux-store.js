import React from 'react';
import { store } from '~/store';

export default App => {
  return class AppWithRedux extends React.Component {
    static async getInitialProps(appContext) {
      const reduxStore = store;

      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    constructor(props) {
      super(props);
      this.reduxStore = store;
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
