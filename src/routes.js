import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: false,
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#ffffff',
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Rocketshoes' }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        // options={User.navigationOptions}
      />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return <NavigationContainer>{RootStack()}</NavigationContainer>;
}
