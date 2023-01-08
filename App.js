import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
     <Text>Test</Text> 
    </>
  );
}

export default App;