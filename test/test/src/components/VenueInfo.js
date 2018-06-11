import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native'
import normalize from 'react-native-elements/src/helpers/normalizeText'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Communications from 'react-native-communications';
import getDirections from 'react-native-google-maps-directions'

class VenueInfo extends Component {

  handleGetDirections = () => {
    const data = {
       source: {
        latitude: null,
        longitude: null
      },
      destination: {
        latitude: parseFloat(this.props.latitude),
        longitude: parseFloat(this.props.longitude)
      },
      params: [
        {
          key: "travelmode",
          value: "driving"
        },
        {
          key: "dir_action",
          value: "navigate"
        }
      ]
    }
    getDirections(data)
  }

  render() {
    const { venueInfoContainer, instructionText, icon } = styles
    return (
      <View style={venueInfoContainer}>
        <TouchableOpacity onPress={() => Linking.openURL(this.props.website)}>
          <View alignItems="center">
              <MaterialIcons style={icon} name="desktop-mac" size={30} />
              <Text style={instructionText}>Visit the website</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleGetDirections()}>
          <View alignItems="center">
            <FontAwesome style={icon} name="map-marker" size={30} />
            <Text style={instructionText}>Get directions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.phonecall(this.props.phone, true)}>
          <View alignItems="center">
            <MaterialIcons style={icon} name="call" size={30} />
            <Text style={instructionText}>Call the venue</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default VenueInfo;

const styles = StyleSheet.create({
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
})
