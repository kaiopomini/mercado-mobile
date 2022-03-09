import React from 'react';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { BaseCustomTabButton, CustonTabButtonView } from './styles';

export const CustomBottomTabBarButton = ({
  children,
  onPress,
  accessibilityState,
}: BottomTabBarButtonProps) => {
  const isSelected = !!accessibilityState?.selected;
  return (
    <BaseCustomTabButton activeOpacity={1} onPress={onPress}>
      <CustonTabButtonView isSelected={isSelected}>
        {children}
      </CustonTabButtonView>
    </BaseCustomTabButton>
  );
};
