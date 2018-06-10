import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Icon, Content } from 'native-base';
import normalize from 'react-native-elements/src/helpers/normalizeText'
import detailResponse from '../../../example_data/details_response'
import OpeningTimes from '../OpeningTimes'

class PerkScreen extends Component {

  static navigationOptions = { header: null};

  constructor(props) {
    super(props)
    this.state = {
      perk: '',
      errorMessage: "",
      isFetching: true
     }
  }

  componentDidMount() {
    this.setState({ perk: detailResponse.data, isFetching: false })
  }

  render() {
    console.log(this.props.navigation + 'perk screen')
    const { navigation } = this.props
    // const { params } = this.props.navigation.state

    listing = this.props.navigation.state.params;

    return (
      <ScrollView style={styles.screen}>
        <Image style={styles.image} source={{ uri: this.state.perk.image }} />
        <View>
          <Text style={styles.titlesText}>{listing.title}</Text>
        </View>
        <View>
          <Text style={styles.detailsText}>{listing.subtitle}</Text>
        </View>
        <Text style={styles.titlesText}>OPENING TIMES</Text>
        <OpeningTimes
          open_hours={this.state.perk.open_hours}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          horizontal
        />
        <View>
          <Text style={styles.titlesText}>PERK DETAILS</Text>
          <Text style={styles.detailsText}>{this.state.perk.description}</Text>
        </View>
      </ScrollView>
    )
  }
}

export default PerkScreen;


const styles = {
  screen: {
    backgroundColor: '#454545',
  },
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  detailsText: {
    fontSize: normalize(12),
    color: '#FFFFFF',
    marginLeft: 30,
  },
  image: {
    height: 150,
    flex: 1,
    width: null,
  },
  titlesText: {
    fontSize: normalize(14),
    marginLeft: 30,
    marginVertical: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
}
