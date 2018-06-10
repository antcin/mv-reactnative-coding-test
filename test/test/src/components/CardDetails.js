import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import Card from './Card';
import CardSection from './CardSection';
import PerkButton from './PerkButton';
import normalize from 'react-native-elements/src/helpers/normalizeText'

const CardDetails = ({ listing }) => {
  const { title, image, subtitle, type } = listing



  return (
  <Card>
    <CardSection>
      <Image style={styles.img} source={{ uri: image }} />
    </CardSection>
    <CardSection>
      <View style={styles.headerContent}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.detailsText}>{subtitle}</Text>
      </View>
    </CardSection>
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
  }
}

export default CardDetails;
