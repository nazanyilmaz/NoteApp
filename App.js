import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigatoor from './src/router/rootNavigator';
import Provider from './src/components/context/provider';

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <RootNavigatoor />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
