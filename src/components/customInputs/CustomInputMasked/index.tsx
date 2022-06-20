import React, { useState } from 'react';

import { Control, Controller } from 'react-hook-form';
import { TextInputProps, View } from 'react-native';

import {
  LeftIcon,
  RightIcon,
  StyledInputHelperText,
  StyledInputLabel,
  StyledMaskedTextInput,
} from './styles';

interface Props extends TextInputProps {
  control: Control<any, any>;
  name: string;
  label?: string;
  isPassword?: boolean;
  leftIcon?: string;
}

import FAIcons from 'react-native-vector-icons/FontAwesome';
import Ionicicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../../global/styles/theme';

const PHONE_MASK = [
  '(',
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const TELEPHONE_MASK = [
  '(',
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const CustomInputMasked = ({
  control,
  name,
  isPassword,
  leftIcon,
  label,
  ...rest
}: Props) => {
  const [hidePassword, setHidePassword] = useState(true);
  // const [maskedValue, setMaskedValue] = useState('');
  const handleShowPassword = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View>
          {leftIcon && (
            <LeftIcon>
              <FAIcons
                name={leftIcon}
                size={24}
                color={theme.colors.darkLight}
              />
            </LeftIcon>
          )}
          {label && <StyledInputLabel>{label}</StyledInputLabel>}

          <StyledMaskedTextInput
            value={value}
            onChangeText={(masked, unmasked) => {
              onChange(unmasked);
            }}
            mask={text => {
              if (text && text.replace(/\D+/g, '')?.length === 10) {
                return TELEPHONE_MASK;
              } else {
                return PHONE_MASK;
              }
            }}
            onBlur={onBlur}
            {...rest}
          />

          {isPassword && (
            <RightIcon onPress={handleShowPassword} activeOpacity={0.7}>
              <Ionicicons
                name={hidePassword ? 'md-eye-off' : 'md-eye'}
                size={30}
                color={theme.colors.darkLight}
              />
            </RightIcon>
          )}
          <StyledInputHelperText error={error ? true : false}>
            {error ? error.message : ' '}
          </StyledInputHelperText>
        </View>
      )}
    />
  );
};
