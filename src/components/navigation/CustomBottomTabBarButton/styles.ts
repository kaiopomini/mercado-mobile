import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

interface ITypeProps {
  isSelected: boolean;
}

export const CustonTabButtonView = styled(View)`
  ${({ isSelected }: ITypeProps) => isSelected && 'top: -8px;'};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #ffffff;
`;
export const BaseCustomTabButton = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
