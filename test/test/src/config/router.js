import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import MainScreen from '../components/screens/MainScreen'
import PerkScreen from '../components/screens/PerkScreen'
import BrowseTab from '../components/AppTabNavigator/BrowseTab';
import PostsTab from '../components/AppTabNavigator/PostsTab';
import FavouritesTab from '../components/AppTabNavigator/FavouritesTab';
import RedeemedTab from '../components/AppTabNavigator/RedeemedTab';
import ProfileTab from '../components/AppTabNavigator/ProfileTab';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const AppStackNavigator = createStackNavigator({
  MainScreen:{
    screen: MainScreen
  },
  PerkScreen:{
    screen: PerkScreen
  }
})

export const AppTabNavigator = createBottomTabNavigator({
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

export const Root = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
