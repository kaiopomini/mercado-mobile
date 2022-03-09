import React from 'react';
import { FullHeader } from '../../components/headers/FullHeader';
import { Highlights } from '../../components/Highlights';

import { BaseView, StyledScrollView } from './styles';

export const Home = () => {
  return (
    <BaseView>
      <StyledScrollView>
        <FullHeader />
        <Highlights />
      </StyledScrollView>
    </BaseView>
  );
};
