import React from 'react';
import { FlatList } from 'react-native';

import { Separator, StyledContainer, Title } from './styles';
import { ProductCard } from '../cards/ProductCard';

const items = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

export const CustomOffers = () => {
  return (
    <StyledContainer>
      <Title>Ofertas Especiais</Title>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={() => <ProductCard />}
        ItemSeparatorComponent={() => <Separator />}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
      />
    </StyledContainer>
  );
};
