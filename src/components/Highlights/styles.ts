import { View, Image, Text, Dimensions } from 'react-native';
import styled from 'styled-components';
import { theme } from '../../global/styles/theme';

const { width } = Dimensions.get('window');

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
