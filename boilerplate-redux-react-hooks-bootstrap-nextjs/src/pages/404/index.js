import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '~/components/Header';
import Wrapper from '~/components/Wrapper';

import * as NavigationActions from '~/store/modules/navigation/actions';

export default function SignIn() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(NavigationActions.setPage(''));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Wrapper>
        <h1>404 - Page not found</h1>
      </Wrapper>
    </>
  );
}
