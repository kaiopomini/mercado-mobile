import React from 'react';
import { setCustomText } from 'react-native-global-props';
import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes';

const customTextProps = {
  style: {
    color: 'black',
    fontFamily: 'Roboto',
  },
};

setCustomText(customTextProps);

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
