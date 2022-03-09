import React from 'react';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { BaseCustomTabButton, CustonTabButtonView } from './styles';

export const CustomBottomTabBarCenterButton = ({
  children,
  onPress,
}: BottomTabBarButtonProps) => {
  return (
    <BaseCustomTabButton activeOpacity={0.7} onPress={onPress}>
      <CustonTabButtonView>{children}</CustonTabButtonView>
    </BaseCustomTabButton>
  );
};
