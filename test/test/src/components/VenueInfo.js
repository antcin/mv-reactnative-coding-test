import React, { Component } from 'react'
import { View, Text } from 'react-native'
import normalize from 'react-native-elements/src/helpers/normalizeText'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class VenueInfo extends Component {
  render() {
    const { venueInfoContainer, instructionText, icon } = styles
    return (
      <View style={venueInfoContainer}>
        <View alignItems="center">
          <MaterialIcons style={icon} name="desktop-mac" size={30} />
          <Text style={instructionText}>Visit the website</Text>
        </View>
        <View alignItems="center">
          <FontAwesome style={icon} name="map-marker" size={30} />
          <Text style={instructionText}>Get directions</Text>
        </View>
        <View alignItems="center">
          <MaterialIcons style={icon} name="call" size={30} />
          <Text style={instructionText}>Call the venue</Text>
        </View>
      </View>
    )
  }
}

export default VenueInfo;

const styles = {
  instructionText: {
    fontSize: normalize(10),
    marginTop: 10,
    color: '#ccc',
  },
  icon: {
    color: '#ccc',
  },
  venueInfoContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'white'
  },
}
