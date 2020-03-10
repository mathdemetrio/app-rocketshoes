import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from './pages/Home';
import Cart from './pages/Cart';

import HeaderLeft from './components/HeaderLeft';
import HeaderRight from './components/HeaderRight';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerRight="none"
        headerTruncatedBackTitle="none"
        // initialRouteName="Home"
        screenOptions={{
          gestureEnabled: false,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitle: false,
          headerStyle: {
            backgroundColor: '#141419',
          },
          cardStyle: {
            backgroundColor: '#191920',
          },
          headerLeft: props => <HeaderLeft {...props} />,
          headerRight: props => <HeaderRight {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Cart"
          component={Cart}
          // options={User.navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
