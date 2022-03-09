import { View, Image, Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

const { width } = Dimensions.get('window');

type Props = {
  selected: boolean;
};

export const StyledContainer = styled(View)`
  background-color: ${theme.colors.secondary};
`;

export const Title = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 8px 16px;
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: 200px;
  border-radius: 16px;
`;
export const CardContainer = styled(View)`
  width: ${width}px;
  padding: 0 16px;
`;

export const ItemScrollContainer = styled(View)`
  width: 70%;
  z-index: 1;
  position: absolute;
  bottom: 20px;
  align-self: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ItemScroll = styled.View<Props>`
  width: ${({ selected }) => (selected ? 24 : 8)}px;
  height: 8px;
  margin: 0 2px;
  background-color: ${({ selected }) => (selected ? 'blue' : '#fff')};
  z-index: 1;
  border-radius: 4px;
`;

export const ItemScrollSelected = styled(View)`
  width: 24px;
  height: 8px;
  margin: 0 2px;
  background-color: blue;
  z-index: 1;
  border-radius: 4px;
`;
