import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FAIcons from 'react-native-vector-icons/FontAwesome';

import { Home } from '../screens/Home';
import { Producs } from '../screens/Producs';
import { theme } from '../global/styles/theme';
import { CustomBottomTabBarButton } from '../components/navigation/CustomBottomTabBarButton';
import { CustomBottomTabBarCenterButton } from '../components/navigation/CustomBottomTabBarCenterButton';

const { Navigator, Screen } = createBottomTabNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        // it let navbar transparent
        tabBarStyle: {
          backgroundColor: 'white',
        },
      }}
      initialRouteName={'Home'}>
      <Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <FAIcons
              name={'home'}
              size={26}
              color={focused ? theme.colors.brand : theme.colors.darkLight}
            />
          ),
          tabBarButton: props => <CustomBottomTabBarButton {...props} />,
        }}
      />

      <Screen
        name={'Favorites'}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <FAIcons
              name={'heart'}
              size={26}
              color={focused ? theme.colors.brand : theme.colors.darkLight}
            />
          ),
          tabBarButton: props => <CustomBottomTabBarButton {...props} />,
        }}
      />

      <Screen
        name={'Shop'}
        component={Producs}
        options={{
          tabBarIcon: () => (
            <FAIcons name={'shopping-bag'} size={30} color={'#ffffff'} />
          ),
          tabBarButton: props => <CustomBottomTabBarCenterButton {...props} />,
        }}
      />

      <Screen
        name={'Orders'}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <FAIcons
              name={'list-alt'}
              size={26}
              color={focused ? theme.colors.brand : theme.colors.darkLight}
            />
          ),
          tabBarButton: props => <CustomBottomTabBarButton {...props} />,
        }}
      />
      <Screen
        name={'Cart'}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <FAIcons
              name={'shopping-cart'}
              size={26}
              color={focused ? theme.colors.brand : theme.colors.darkLight}
            />
          ),
          tabBarButton: props => <CustomBottomTabBarButton {...props} />,
        }}
      />
    </Navigator>
  );
}
