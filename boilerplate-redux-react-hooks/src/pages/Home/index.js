import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContainerHome } from './styles';

import Header from '~/components/Header';
import Container from '~/components/Container';

import * as NavigationActions from '~/store/modules/navigation/actions';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(NavigationActions.setPage('Home'));
  }, [dispatch]);

  return (
    <ContainerHome>
      <Header />
      <Container>
        <h1>Home</h1>
      </Container>
    </ContainerHome>
  );
}
