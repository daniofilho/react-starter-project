import React, { Component } from 'react';
import { loadGetInitialProps } from 'next-server/dist/lib/utils';
import ReactGA from 'react-ga';

export default () => Composed =>
  class extends Component {
    // necessário repassar essa função para que o getInitialProps
    // de cada componente não seja perdido
    static getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx);
    }

    componentDidMount() {
      // Inicializa o Google Analytics
      ReactGA.initialize('ID_ANALYTICS');
      // Avisa o Google Anaylytics quando houver mudança de rota
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />;
    }
  };
