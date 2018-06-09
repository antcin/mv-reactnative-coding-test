import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';

class BrowseTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" style={{color: tintColor}}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>BrowseTab</Text>
      </View>
    );
  }
}

export default BrowseTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
