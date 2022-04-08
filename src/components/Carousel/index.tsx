import React, { useCallback, useRef, useState } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import FAIcons from 'react-native-vector-icons/FontAwesome';

import { Card } from './Card';
import {
  CardContainer,
  ItemNavContainer,
  ItemNavContainerRigth,
  ItemScroll,
  ItemScrollContainer,
  StyledContainer,
} from './styles';
import { theme } from '../../global/styles/theme';

const items = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

export const Carousel = () => {
  const [viewIndex, setViewIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);
      setViewIndex(roundIndex);
    },
    [],
  );

  const moveNextSlide = useCallback(
    (interval?: NodeJS.Timer) => {
      if (interval) {
        clearInterval(interval);
      }

      if (viewIndex < items.length - 1) {
        flatListRef.current?.scrollToIndex({
          animated: true,
          index: viewIndex + 1,
        });
      } else {
        flatListRef.current?.scrollToIndex({
          animated: true,
          index: 0,
        });
      }
    },
    [viewIndex],
  );

  const moveBackSlide = () => {
    if (viewIndex > 0) {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: viewIndex - 1,
      });
    } else {
      flatListRef.current?.scrollToEnd({
        animated: true,
      });
    }
  };

  useFocusEffect(
    useCallback(() => {
      const interval: NodeJS.Timer = setInterval(
        () => moveNextSlide(interval),
        5000,
      );
      return () => clearInterval(interval);
    }, [moveNextSlide]),
  );

  return (
    <StyledContainer>
      <FlatList
        ref={flatListRef}
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

      <ItemNavContainer onPress={() => moveBackSlide()}>
        <FAIcons name={'angle-left'} size={64} color={theme.colors.primary} />
      </ItemNavContainer>
      <ItemNavContainerRigth onPress={() => moveNextSlide()}>
        <FAIcons name={'angle-right'} size={64} color={theme.colors.primary} />
      </ItemNavContainerRigth>
    </StyledContainer>
  );
};
