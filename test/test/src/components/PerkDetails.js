import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card'

const PerkDetails = (props) => {

    return (
      <Card>
        <Text>{props.perk.title}</Text>
      </Card>
    );
}

export default PerkDetails;
