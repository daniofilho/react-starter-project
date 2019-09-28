import React from 'react';
import { connect } from 'react-redux';

import Head from 'next/head';

import Page404 from '~/pages/404';

const My404 = () => (
  <>
    <Head>
      <title>404 - Page not found!</title>
    </Head>
    <Page404 />
  </>
);

export default connect(state => state)(My404);
