import styled from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const StyledButton = styled(TouchableOpacity)`
  padding: 16px;
  background-color: ${theme.colors.brand};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 0 4px 0px 4px;
  height: 60px;
`;

export const ButtonText = styled(Text)`
  color: ${theme.colors.primary};
  font-size: 16px;
`;
