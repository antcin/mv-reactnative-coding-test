import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import normalize from 'react-native-elements/src/helpers/normalizeText'


const PerkButton = ({ onPress }) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.perk}>
      <Text style={styles.perkText}>
        PERK
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  perk: {
    position:'absolute',
    right:10,
    top: -60,
    paddingHorizontal:20,
    paddingVertical:5,
    borderWidth:3,
    borderColor: '#5F4B8B',
  },
  perkText: {
    fontSize: normalize(12),
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
}
export default PerkButton;
