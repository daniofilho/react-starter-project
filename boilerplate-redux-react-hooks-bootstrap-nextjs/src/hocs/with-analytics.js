import React from 'react';
import { loadGetInitialProps } from 'next-server/dist/lib/utils';
import ReactGA from 'react-ga';

export default App => {
  return class AppWithAnalytics extends React.Component {
    static async getInitialProps(ctx) {
      return loadGetInitialProps(App, ctx);
    }

    componentDidMount() {
      // Inicializa o Google Analytics
      ReactGA.initialize('ID_ANALYTICS');
      // Avisa o Google Anaylytics quando houver mudança de rota
      ReactGA.pageview(window.location.pathname);
      console.log('ReactGA Event, page: ', window.location.pathname);
    }

    render() {
      return <App {...this.props} />;
    }
  };
};
