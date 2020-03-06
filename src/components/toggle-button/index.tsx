import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import variables from '../../variables';
type propTypes = {
    id: string, 
    textOn?: string, 
    textOff?: string, 
    isToggled?: boolean,
    onPress: (id: string) => void,
}

const ToggleButton = ({id, textOn, textOff, isToggled, onPress}: propTypes) => (
        <TouchableOpacity
            onPress={()=> onPress(id)} 
            style={[styles.buttonContainer, {backgroundColor: isToggled ? variables.toggledOn : variables.toggledOff} ]}>
            <Text style={{ color: isToggled ? 'black' : 'white' }}>{isToggled ? textOn : textOff}</Text>
        </TouchableOpacity>
    );

  export default ToggleButton