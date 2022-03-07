import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Producs } from '../screens/Producs';

const { Navigator, Screen } = createBottomTabNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <Screen name={'Home'} component={Home} />
      <Screen name={'Shop'} component={Producs} />
      <Screen name={'Favorites'} component={Home} />
      <Screen name={'Cart'} component={Home} />
    </Navigator>
  );
}
