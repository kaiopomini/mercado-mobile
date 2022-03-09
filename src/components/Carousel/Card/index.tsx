import React from 'react';

import VegetablesImg from '../../../assets/img/vegetables.jpg';
import { CardImage, StyledContainer } from './styles';

export const Card = () => {
  return (
    <StyledContainer>
      <CardImage source={VegetablesImg} resizeMode={'cover'} />
    </StyledContainer>
  );
};
