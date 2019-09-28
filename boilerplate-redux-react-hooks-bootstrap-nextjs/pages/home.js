import React from 'react';
import { connect } from 'react-redux';

import Head from 'next/head';

import Home from '~/pages/Home';

const MyHome = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Home />
  </>
);
export default connect(state => state)(MyHome);
