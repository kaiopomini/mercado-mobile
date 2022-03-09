import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import { Card } from './Card';
import {
  CardContainer,
  ItemScroll,
  ItemScrollContainer,
  ItemScrollSelected,
  StyledContainer,
} from './styles';

const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export const Carousel = () => {
  const [arraylength, setArraylength] = useState(0);
  const [viewIndex, setViewIndex] = useState(0);
  useEffect(() => {
    setArraylength(items.length);
  }, []);
  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);
      setViewIndex(roundIndex);
      // console.log('roundIndex:', roundIndex);
    },
    [],
  );

  useEffect(() => {
    console.log('Renderizou');
  }, [viewIndex]);

  return (
    <StyledContainer>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={() => (
          <CardContainer>
            <Card />
          </CardContainer>
        )}
        onScroll={onScroll}
      />
      <ItemScrollContainer>
        {items.map((_, index) => (
          <ItemScroll key={index} selected={Boolean(index === viewIndex)} />
        ))}
      </ItemScrollContainer>
    </StyledContainer>
  );
};
