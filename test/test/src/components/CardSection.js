import React from 'react';
import { StyleSheet, View } from 'react-native';

const CardSection = props => <View style={styles.container}>{props.children}</View>;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
});

export default CardSection;
