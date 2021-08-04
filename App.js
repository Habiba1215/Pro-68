import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FB from './Screens/fb'
import IN from './Screens/in'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

export default function App() {
  return (
    <AppContainer />
  );
}
const TabNavigator = createBottomTabNavigator({
  Instagram: { screen: IN },
  Facebook: { screen: FB }

})

const AppContainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
