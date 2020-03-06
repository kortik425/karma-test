import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import _ from 'lodash';
import { Location } from '../../types';
import Element from '../element';

type propTypes = {
  locations: Array<Location>,
  id: string, 
  textOn?: string, 
  textOff?: string,
  updateFollowedLocation: (elemIndex: number) => void,
}


const LocationList = ({locations, updateFollowedLocation}: propTypes) => {
    const sortedLocations = _.sortBy(locations, 'distance');
    const onSelect = useCallback((id:string) => {
        const elementIndex = _.findIndex(locations, (elem)=> elem.id === id);
        updateFollowedLocation(elementIndex);
    }, locations);

  return (
    <FlatList
        data={sortedLocations}
        renderItem={({ item }) => (
          <Element
            id={item.id}
            location={item}
            onSelect={onSelect}
          />
          )}
        keyExtractor={location => location.id.toString()}
      />
  )};

export default LocationList;
