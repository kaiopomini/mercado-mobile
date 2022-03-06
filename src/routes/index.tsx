import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthRoutes} from './auth.routes';
import {LoginRoutes} from './login.routes';
// import {useAuth} from '../hooks/auth';

export function Routes() {
  // const {user} = useAuth();
  return (
    <NavigationContainer>
      {true ? <AuthRoutes /> : <LoginRoutes />}
    </NavigationContainer>
  );
}
