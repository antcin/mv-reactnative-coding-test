import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Icon, Content } from 'native-base';
import CardsList from '../CardsList'

class MainScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="heart" style={{color: tintColor}}/>
    )
  }



  render() {
    console.log('MainScree ' + this.props);
    const { navigate } = this.props.navigation
    return (
      <CardsList navigation={this.props.navigation}/>
    );
  }
}

export default MainScreen;
