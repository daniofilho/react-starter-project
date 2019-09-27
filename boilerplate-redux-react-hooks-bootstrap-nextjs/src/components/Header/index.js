import React from 'react';
import { useSelector } from 'react-redux';
import { DiReact } from 'react-icons/di';
import { ContainerHeader } from './styles';

import Navigation from './Navigation';

export default function Header() {
  const page = useSelector(state => state.navigation.page);

  return (
    <ContainerHeader>
      <div className="navigation">
        <DiReact color="FFF" size={30} />
        <Navigation />
      </div>
      <div className="side">
        <strong>You are on: {page || 'ERROR: Page not found!'} </strong>
      </div>
    </ContainerHeader>
  );
}
