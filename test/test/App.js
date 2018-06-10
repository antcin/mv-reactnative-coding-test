import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import MainScreen from './src/components/screens/MainScreen';
import PerkScreen from './src/components/screens/PerkScreen';
import CardsList from './src/components/CardsList';
import { AppTabNavigator } from './src/config/router'

export default class App extends React.Component {
  render() {
    return (
      <AppTabNavigator />
    );
  }
}


// const AppStackNavigator = createStackNavigator({
//   MainScreen:{
//     screen: MainScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: 'HOME'
//     })
//   },
//   PerkScreen:{
//     screen: PerkScreen,
//     headerMode: 'none',
//     navigationOptions: ({ navigation }) => ({
//       title: "PERK"
//     })
//   }
// })
