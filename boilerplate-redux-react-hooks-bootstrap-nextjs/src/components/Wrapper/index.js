import React from 'react';
import PropTypes from 'prop-types';

import { ContainerWrapper } from './styles';

export default function Wrapper({ children }) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
