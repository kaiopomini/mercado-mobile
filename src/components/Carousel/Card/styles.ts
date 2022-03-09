import { View, Image } from 'react-native';
import styled from 'styled-components';
import { theme } from '../../../global/styles/theme';

export const StyledContainer = styled(View)`
  background-color: ${theme.colors.secondary};
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: 200px;
  border-radius: 16px;
`;

