import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContainerPage } from './styles';
import Container from '~/components/Container';

import Header from '~/components/Header';

import * as NavigationActions from '~/store/modules/navigation/actions';

export default function Page() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(NavigationActions.setPage('Page'));
  }, [dispatch]);

  return (
    <ContainerPage>
      <Header />
      <Container>
        <h1>Page</h1>
      </Container>
    </ContainerPage>
  );
}
