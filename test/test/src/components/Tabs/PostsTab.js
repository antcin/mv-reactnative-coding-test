import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';


class PostsTab extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>PostsTab</Text>
      </View>
    );
  }
}

export default PostsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});