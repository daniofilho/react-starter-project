import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContainerPage } from './styles';
import Wrapper from '~/components/Wrapper';

import Header from '~/components/Header';

import * as NavigationActions from '~/store/modules/navigation/actions';

export default function Page() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(NavigationActions.setPage('page'));
  }, [dispatch]);

  return (
    <ContainerPage>
      <Header />
      <Wrapper>
        <h1>Page</h1>
      </Wrapper>
    </ContainerPage>
  );
}
