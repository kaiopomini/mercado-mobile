import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { LoginRoutes } from './login.routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuth } from '../hooks/auth';

export function Routes() {
  const { user } = useAuth();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {user.token ? <AuthRoutes /> : <LoginRoutes />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
