import React from 'react';
import { CustomOffers } from '../../components/CustomOffers';
import { FullHeader } from '../../components/headers/FullHeader';
import { Highlights } from '../../components/Highlights';

import { BaseView, StyledScrollView } from './styles';

export const Home = () => {
  return (
    <BaseView>
      <FullHeader />
      <StyledScrollView>
        <Highlights />
        <CustomOffers />
        <CustomOffers />
      </StyledScrollView>
    </BaseView>
  );
};
