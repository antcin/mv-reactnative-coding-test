import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import normalize from 'react-native-elements/src/helpers/normalizeText';

const PerkButton = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress} style={styles.perk} activeOpacity={0.8}>
    <Text style={styles.perkText}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  perk: {
    position: 'absolute',
    right: 10,
    top: -60,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 3,
    borderColor: '#5F4B8B',
  },
  perkText: {
    fontSize: normalize(12),
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default PerkButton;
