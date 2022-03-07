import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function LoginRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
