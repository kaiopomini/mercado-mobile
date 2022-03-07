import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Producs } from '../screens/Producs';

const { Navigator, Screen } = createBottomTabNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Products" component={Producs} />
      <Screen name="Home2" component={Home} />
    </Navigator>
  );
}
