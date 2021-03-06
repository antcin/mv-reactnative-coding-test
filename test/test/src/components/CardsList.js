import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import CardSection from './CardSection';
import CardDetails from './CardDetails';
import PerkButton from './PerkButton';
import listResponse from '../../example_data/list_response';

class CardsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    this.setState({ listings: listResponse.data });
  }

  handlePerkPress = listing => {
    this.props.navigation.navigate('PerkScreen', { ...listing });
  };

  renderListings() {
    return this.state.listings.map(listing => (
      <View style={styles.container} key={listing.title}>
        <CardDetails listing={listing} />
        <CardSection>
          <PerkButton onPress={() => this.handlePerkPress(listing)}>PERK</PerkButton>
          <TouchableOpacity />
        </CardSection>
      </View>
    ));
  }

  render() {
    return <ScrollView style={styles.screen}>{this.renderListings()}</ScrollView>;
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#454545',
  },
  container: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#242424',
  },
});

export default CardsList;
