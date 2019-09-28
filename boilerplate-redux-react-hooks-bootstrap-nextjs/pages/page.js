import React from 'react';
import { connect } from 'react-redux';

import Head from 'next/head';

import Page from '~/pages/Page';

const MyPage = () => (
  <>
    <Head>
      <title>Page</title>
    </Head>
    <Page />
  </>
);

export default connect(state => state)(MyPage);
