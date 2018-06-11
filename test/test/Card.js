import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = props => <View style={styles.container}>{props.children}</View>;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 80,
  },
});

export default Card;
