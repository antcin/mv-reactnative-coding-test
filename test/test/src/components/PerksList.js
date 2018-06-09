import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import CardDetails from './CardDetails';
import listResponse from '../../example_data/list_response';


class PerksList extends Component {
  state = { perks: listResponse.data }
  // constructor(props){
  //   super(props)
  // }
  handleTilePress = (perks) => {
    this.props.navigation.navigate('PerkDetails', { ...perks })
  }

  renderPerks() {
  return this.state.perks.map(perk => (
    <View style={styles.container} key={perk.title}>
      <CardDetails perk={perk} />
    </View>
  ))
}

  render () {
    return (
      <ScrollView style={styles.screen}>
        {this.renderPerks()}
      </ScrollView>
    );
  }
};

const styles = {
  screen: {
    backgroundColor: '#454545',
  },
  container: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#343538',
  },
}

export default PerksList;
