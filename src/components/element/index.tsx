import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Button from '../toggle-button';
import { Location } from '../../types';

type propTypes = {
  id: string,
  location: Location,
  onSelect: (id: string) => void,
}

const Element = ({location, onSelect}: propTypes) => {
  let distance = location.distance;
  let um = 'm';
  if( distance > 1000){
    distance = Math.round(((distance/1000) + Number.EPSILON) * 100) / 100;
    um = 'km';
  }
  return (
    <View style={styles.container}>
      <View style={styles.secondColumn}>
        <Text>{location.name}</Text>
        <Text>Dist from Karma: {distance}{um}</Text>
      </View>
        <Button id={location.id} onPress={onSelect} textOn="Following" textOff="Follow" isToggled={location.following} />
    </View>
  )};

  export default Element