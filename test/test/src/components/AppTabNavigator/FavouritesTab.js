import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';

class FavouritesTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="heart" style={{color: tintColor}}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>FavouritesTab</Text>
      </View>
    );
  }
}

export default FavouritesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
