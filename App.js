import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './Home';
import List from './List';
import Detail from './Detail';

const stack = createStackNavigator({
  HomeSc: {
    screen: Home, //Yukarıdaki Home'u ifade eder
  },
  ListSc: {
    screen: List,
  },
  DetailSc: {
    screen: Detail,
  },
});

export default createAppContainer(stack);