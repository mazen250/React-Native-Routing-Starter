import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text ,Platform} from 'react-native';
import Home from './pages/Home';
import Details from './pages/Details';
import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();

function App() {
  console.log("hello flipper");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Details" component={Details} 
          options={{
            headerShown: false
          }}
         />
      </Stack.Navigator>
      <StatusBar style="light"
      />
    </NavigationContainer>
  );
}

export default App;