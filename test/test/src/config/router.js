import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import MainScreen from '../components/screens/MainScreen'
import PerkScreen from '../components/screens/PerkScreen'
import PostsTab from '../components/tabs/PostsTab';
import FavouritesTab from '../components/tabs/FavouritesTab';
import RedeemedTab from '../components/tabs/RedeemedTab';
import ProfileTab from '../components/tabs/ProfileTab';
// import CardsList from '../components/CardsList';
import { Content, Icon } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const AppStackNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      headerRight: <Icon name="menu" style={{ paddingRight: 10, color: '#ffffff'}} />,
      title: 'HOME',
      headerTintColor: '#FFFFFF',
      headerStyle: {
        backgroundColor: '#010101'
      },

    })
  },
  PerkScreen:{
    screen: PerkScreen,
    mode: 'screen',
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
      title: 'PERK DETAIL',
      headerBackTitle: null,
    })
  }
})

export const AppTabNavigator = createBottomTabNavigator({
  BROWSE: {
    screen: AppStackNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="home" style={{color: tintColor}}/>
      ),
    })
  },
  POSTS: {
    screen: PostsTab,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="camera" style={{color: tintColor}}/>
      ),
    })
  },
  FAVOURITES: {
    screen: FavouritesTab,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="heart" style={{color: tintColor}}/>
      )
    })
  },
  REDEMEED: {
    screen: RedeemedTab,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({tintColor}) => (
        <Icon  style={{color: tintColor}}/>
      )
    })
  },
  PROFILE: {
    screen: ProfileTab,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="person" style={{color: tintColor}}/>
      )
    })
  },
},{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    activeTintColor: '#ccc',
    inactiveTintColor: '#FFFFFF',
    style: {
      backgroundColor: '#010101'
    }
  }
}
)
