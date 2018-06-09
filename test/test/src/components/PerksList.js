import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PerkDetails from './PerkDetails';
import listResponse from '../../example_data/list_response'


class PerksList extends Component {
  state = { perks: listResponse.data }
  // constructor(props){
  //   super(props)
  // }
  renderPerks() {
  return this.state.perks.map(perk => (
      <PerkDetails key={perk.title} perk={perk} />
  ))
}

  render () {
    return (
      <View>
        {this.renderPerks()}
      </View>
    );
  }
};

export default PerksList;
