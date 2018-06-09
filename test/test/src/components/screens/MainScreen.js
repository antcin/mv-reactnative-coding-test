import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'native-base';
import BrowseTab from '../AppTabNavigator/BrowseTab';
import PostsTab from '../AppTabNavigator/PostsTab';
import FavouritesTab from '../AppTabNavigator/FavouritesTab';
import RedeemedTab from '../AppTabNavigator/RedeemedTab';
import ProfileTab from '../AppTabNavigator/ProfileTab';

class MainScreen extends Component {
  static navigationOptions = {
    headerRight: <Icon name="menu" style={{ paddingRight: 10}} />
  }
  render() {
    return (
      <AppTabNavigator />
    );
  }
}

export default MainScreen;

const AppTabNavigator = createBottomTabNavigator({
  Browse: {
    screen: BrowseTab
  },
  Posts: {
    screen: PostsTab
  },
  Favourites: {
    screen: FavouritesTab
  },
  Redeemed: {
    screen: RedeemedTab
  },
  Profile: {
    screen: ProfileTab
  },
},{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
  }
}
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
