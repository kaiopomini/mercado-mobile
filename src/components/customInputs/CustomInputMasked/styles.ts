import styled from 'styled-components';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../../global/styles/theme';
import MaskInput from 'react-native-mask-input';

interface ITypeProps {
  error: boolean;
}

export const StyledTextInput = styled(TextInput)`
  background-color: ${theme.colors.secondary};
  padding: 16px;
  padding-left: 52px;
  padding-right: 52px;
  border-radius: 8px;
  font-size: 16px;
  height: 52px;
  color: ${theme.colors.tertiary};
`;

export const StyledMaskedTextInput = styled(MaskInput)`
  background-color: ${theme.colors.secondary};
  padding: 16px;
  padding-left: 52px;
  padding-right: 52px;
  border-radius: 8px;
  font-size: 16px;
  height: 52px;
  color: ${theme.colors.tertiary};
`;

export const StyledInputLabel = styled(Text)`
  color: ${theme.colors.tertiary};
  font-size: 13px;
  text-align: left;
`;

export const StyledInputHelperText = styled(Text)`
  color: ${(props: ITypeProps) =>
    props.error ? theme.colors.red : theme.colors.tertiary};
  font-size: 13px;
  text-align: left;
  align-self: stretch;
`;

export const LeftIcon = styled(View)`
  left: 16px;
  top: 32px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled(TouchableOpacity)`
  right: 16px;
  top: 26px;
  position: absolute;
  z-index: 1;
`;
