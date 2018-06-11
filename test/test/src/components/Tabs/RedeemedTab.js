import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class RedeemedTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>RedeemedTab</Text>
      </View>
    );
  }
}

export default RedeemedTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
