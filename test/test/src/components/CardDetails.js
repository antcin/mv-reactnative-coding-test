import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import normalize from 'react-native-elements/src/helpers/normalizeText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Card from './Card';
import CardSection from './CardSection';

const CardDetails = ({ listing }) => {
  const { title, image, subtitle, offer, is_favourited } = listing;
  let walkingTime = '';
  if (offer != null && offer.location != null) {
    walkingTime = offer.location.walking_time;
  }

  favourite = listing => {
    let heartIcon;
    listing.is_favourited === 1 ? (heartIcon = 'heart') : (heartIcon = 'heart-o');

    return (
      <TouchableOpacity style={styles.favourite}>
        <View>
          <FontAwesome name={heartIcon} size={25} color="white" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Card>
      <CardSection>
        <Image style={styles.img} source={{ uri: image }} />
        {this.favourite(listing)}
      </CardSection>
      <CardSection>
        <View style={styles.headerContent}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.detailsText}>{subtitle}</Text>
          <Text style={styles.detailsText}>{walkingTime}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  titleText: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F8F8F8',
  },
  detailsText: {
    paddingTop: 10,
    fontSize: normalize(12),
    color: '#9E9E9E',
  },
  img: {
    height: 300,
    flex: 1,
    borderRadius: 10,
    marginTop: -10,
    marginLeft: -10,
    marginRight: -10,
  },
  favourite: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
});

export default CardDetails;
