import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Header from '~/components/Header';

export default function Auth({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

Auth.propTypes = {
  children: PropTypes.element.isRequired,
};
