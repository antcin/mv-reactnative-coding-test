import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container, Content, Icon, Tab } from 'native-base';
import Card from '../Card'
import CardsList from '../CardsList'
import PerkButton from '../PerkButton'

class BrowseTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" style={{color: tintColor}}/>
    ),
    title: "BROWSE",

  }

  render() {
    console.log(this.children);
    return (
      <Container style={styles.container}>
        <Content>
          <CardsList />
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
