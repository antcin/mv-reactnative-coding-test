import React, { Component } from 'react'
import { Switch, Text, FlatList, ScrollView, View, TouchableOpacity } from 'react-native'

// import normalize from 'react-native-elements/src/helpers/normalizeText'
class OpeningTimes extends Component {
  constructor(props) {
   super(props);
 }

  keyExtractor = item => item.day

  renderItem = ({ item }) => {
    const { open, close, index, is_open } = item
    let { day } = item
    day = day.substring(0, 3).toUpperCase()

    return (
      <TouchableOpacity onPress={() => this.expandCollapse}>
        <ScrollView>
          <View alignItems="center" justifyContent="center" style={styles.item}>
            <Text style={styles.dayText}>{day}</Text>
            <Text style={styles.cardText}>
                {open} - {close}
              </Text>
          </View>
        </ScrollView>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>Opening Times</View>
        <FlatList
          horizontal
          data={this.props.open_hours}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    )
  }
}

export default OpeningTimes;

const styles = {
  item: {
    backgroundColor: '#423f42',
    borderLeftColor: '#343538',
    borderLeftWidth: 1,
    borderTopColor: '#5F4B8B',
    borderTopWidth: 4,
    width: 60,
    height: 60,
  },
  dayText: {
    color: '#ccc',
  },
}
