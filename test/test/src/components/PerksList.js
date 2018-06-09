import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import PerkDetails from './PerkDetails';
import listResponse from '../../example_data/list_response';


class PerksList extends Component {
  state = { perks: listResponse.data }
  // constructor(props){
  //   super(props)
  // }
  renderPerks() {
  return this.state.perks.map(perk => (
    <View style={styles.container} key={perk.title}>
      <PerkDetails perk={perk} />
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
