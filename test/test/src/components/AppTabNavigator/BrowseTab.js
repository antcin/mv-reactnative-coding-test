import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import Card from '../Card'
import PerksList from '../PerksList'

class BrowseTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" style={{color: tintColor}}/>
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <PerksList />
        </Content>
      </Container>
    );
  }
}

export default BrowseTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454545',
  },
});
