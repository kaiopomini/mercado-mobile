import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

const { width } = Dimensions.get('window');

type Props = {
  selected: boolean;
};

export const StyledContainer = styled.View`
  background-color: ${theme.colors.secondary};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 8px 16px;
`;

export const CardContainer = styled.View`
  width: ${width}px;
  padding: 0 16px;
`;

export const ItemScrollContainer = styled.View`
  width: 70%;
  z-index: 1;
  position: absolute;
  bottom: 20px;
  align-self: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ItemScroll = styled.View<Props>`
  width: ${({ selected }) => (selected ? 24 : 8)}px;
  height: 8px;
  margin: 2px;
  background-color: ${({ selected }) => (selected ? 'blue' : '#fff')};
  z-index: 1;
  border-radius: 4px;
`;

export const ItemNavContainer = styled.TouchableOpacity`
  z-index: 1;
  position: absolute;
  bottom: 70px;
  left: 24px;
`;

export const ItemNavContainerRigth = styled.TouchableOpacity`
  z-index: 1;
  position: absolute;
  bottom: 70px;
  right: 24px;
`;
