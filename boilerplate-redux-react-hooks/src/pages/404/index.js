import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '~/components/Header';
import Container from '~/components/Container';

import * as NavigationActions from '~/store/modules/navigation/actions';

export default function SignIn() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(NavigationActions.setPage(''));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <h1>404 - Page not found</h1>
      </Container>
    </>
  );
}
