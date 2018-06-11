import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import normalize from 'react-native-elements/src/helpers/normalizeText';
import detailResponse from '../../../example_data/details_response';
import OpeningTimes from '../OpeningTimes';
import VenueInfo from '../VenueInfo';

class PerkScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perk: '',
      errorMessage: '',
      isFetching: true,
    };
  }

  componentDidMount() {
    this.setState({ perk: detailResponse.data, isFetching: false });
  }

  back(goBack) {
    return (
      <TouchableOpacity onPress={() => goBack()} style={styles.back}>
        <Ionicons name="ios-arrow-back-outline" size={30} color="white" />
      </TouchableOpacity>
    );
  }

  render() {
    listing = this.props.navigation.state.params;
    const { goBack } = this.props.navigation;

    return (
      <ScrollView style={styles.screen}>
        <Image style={styles.image} source={{ uri: this.state.perk.image }} />
        {this.back(goBack)}
        <View>
          <Text style={styles.titlesText}>{listing.title}</Text>
        </View>
        <View>
          <Text style={styles.subtitleText}>{listing.subtitle}</Text>
        </View>
        <VenueInfo
          website={this.state.perk.website}
          latitude={this.state.perk.latitude}
          longitude={this.state.perk.longitude}
          phone={this.state.perk.phone}
        />
        <Text style={styles.titlesText}>OPENING TIMES</Text>
        <OpeningTimes
          open_hours={this.state.perk.open_hours}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          horizontal
        />
        <View>
          <Text style={styles.titlesText}>PERK DETAILS</Text>
          <Text style={styles.descriptionText}>{this.state.perk.description}</Text>
        </View>
      </ScrollView>
    );
  }
}

export default PerkScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#242424',
  },
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  subtitleText: {
    fontSize: normalize(12),
    color: '#9E9E9E',
    marginLeft: 30,
  },
  descriptionText: {
    fontSize: normalize(12),
    color: '#E4E4E4',
    marginLeft: 30,
  },
  image: {
    height: 300,
    flex: 1,
    width: null,
  },
  titlesText: {
    fontSize: normalize(14),
    marginLeft: 30,
    marginVertical: 20,
    fontWeight: 'bold',
    color: '#F2F2F2',
  },
  back: {
    position: 'absolute',
    left: 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 30,
  },
});
