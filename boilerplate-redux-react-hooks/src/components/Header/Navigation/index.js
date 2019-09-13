import React from 'react';
import { Link } from 'react-router-dom';

import { NavigationContainer } from './styles';

export default function Navigation() {
  return (
    <NavigationContainer>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/page">Page</Link>
      </li>
    </NavigationContainer>
  );
}
