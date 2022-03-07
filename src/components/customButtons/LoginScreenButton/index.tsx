import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { ButtonText, StyledButton } from './styles';

interface Props extends TouchableOpacityProps {}

export const LoginScrenButton = ({ children, ...rest }: Props) => {
  return (
    <StyledButton activeOpacity={0.7} {...rest}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};
