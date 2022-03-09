import React from 'react';

import { Carousel } from '../Carousel';

import { StyledContainer, Title } from './styles';

export const Highlights = () => {
  return (
    <StyledContainer>
      <Title>Destaques</Title>
      <Carousel />
    </StyledContainer>
  );
};
