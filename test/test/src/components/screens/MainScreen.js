import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Icon, Content } from 'native-base';
import CardsList from '../CardsList'

class MainScreen extends Component {


  render() {
    return (
      <CardsList navigation={this.props.navigation}/>
    );
  }
}

export default MainScreen;
