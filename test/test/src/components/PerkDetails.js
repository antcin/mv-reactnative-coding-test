import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import normalize from 'react-native-elements/src/helpers/normalizeText'

const PerkDetails = ({ perk }) => {
  const { title, image, subtitle, type } = perk

  return (
  <Card>
    <CardSection>
      <Image style={styles.image} source={{ uri: image }} />
    </CardSection>
    <CardSection>
      <View style={styles.headerContent}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.detailsText}>{subtitle}</Text>
      </View>
    </CardSection>
    <TouchableOpacity style={styles.perk} key={perk.title} onPress={() => Alert.alert(perk.title)}>
      <Text style={styles.perkText}>PERK</Text>
    </TouchableOpacity>
  </Card>
)
}

const styles = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  titleText: {
    paddingTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  detailsText: {
    paddingTop: 10,
    fontSize: normalize(12),
    color: 'white',
  },
  img: {
    height: 300,
    flex: 1,
    borderRadius: 10,
    marginTop: -10,
    marginLeft: -10,
    marginRight: -10,
  },
  perk: {
    position: 'absolute',
    right: 10,
    top: 2,
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderWidth: 3,
    borderColor: '#5F4B8B',
  },
  perkText: {
    fontSize: normalize(12),
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
}

export default PerkDetails;
