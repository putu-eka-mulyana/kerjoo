import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import ListAbsent from '../screens/ListPresent';
import TakePicture from '../screens/TakePicture';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListAbsent"
        component={ListAbsent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TakePicture"
        component={TakePicture}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
