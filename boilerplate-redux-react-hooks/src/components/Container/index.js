import React from 'react';
import PropTypes from 'prop-types';

import { ContainerWrapper } from './styles';

export default function Container({ children }) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};
