import React from 'react';
import { StatusBar } from 'react-native';
import { AppTabNavigator } from './src/config/router';

export default class App extends React.Component {
  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <AppTabNavigator />
    );
  }
}
