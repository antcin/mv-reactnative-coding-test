import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainScreen from '../components/screens/MainScreen';
import PerkScreen from '../components/screens/PerkScreen';
import PostsTab from '../components/tabs/PostsTab';
import FavouritesTab from '../components/tabs/FavouritesTab';
import RedeemedTab from '../components/tabs/RedeemedTab';
import ProfileTab from '../components/tabs/ProfileTab';

export const AppStackNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
      navigationOptions: ({ navigation }) => ({
        headerRight: (
          <FontAwesome name="bars" size={24} style={{ paddingRight: 10, color: '#ffffff' }} />
        ),
        title: 'HOME',
        headerTintColor: '#FFFFFF',
        headerStyle: {
          backgroundColor: '#010101',
        },
      }),
    },
    PerkScreen: {
      screen: PerkScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'PERK DETAIL',
        headerBackTitle: null,
        header: null,
        tabBarVisible: false,
      }),
    },
  },
  {
    headerMode: 'screen',
  },
);

export const AppTabNavigator = createBottomTabNavigator(
  {
    BROWSE: {
      screen: AppStackNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={28} style={{ color: tintColor }} />
        ),
      }),
    },
    POSTS: {
      screen: PostsTab,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="camera" size={24} style={{ color: tintColor }} />
        ),
      }),
    },
    FAVOURITES: {
      screen: FavouritesTab,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="heart" size={24} style={{ color: tintColor }} />
        ),
      }),
    },
    REDEMEED: {
      screen: RedeemedTab,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="gift" size={24} style={{ color: tintColor }} />
        ),
      }),
    },
    PROFILE: {
      screen: ProfileTab,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={24} style={{ color: tintColor }} />
        ),
      }),
    },
  },
  {
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#ccc',
      inactiveTintColor: '#ffffff',
      style: {
        backgroundColor: '#010101',
      },
    },
  },
);
