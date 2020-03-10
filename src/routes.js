import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: false,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#141419',
          },
          headerTintColor: '#ffffff',
          cardStyle: {
            backgroundColor: '#191920',
          },
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
    </NavigationContainer>
  );
}
