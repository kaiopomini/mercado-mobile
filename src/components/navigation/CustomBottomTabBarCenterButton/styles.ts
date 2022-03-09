import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { theme } from '../../../global/styles/theme';

export const CustonTabButtonView = styled(View)`
  top: -12px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${theme.colors.brand};
`;
export const BaseCustomTabButton = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
