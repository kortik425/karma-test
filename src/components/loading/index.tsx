import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import styles from './styles';
import variables from '../../variables';
 
const LoadingComponent = () => {
  return (
    <View style={styles.container} >
        <Text style={styles.text}>Just a moment, Loading the locations!</Text>
         <ActivityIndicator size="large" color={variables.mainColor} />
    </View>
  )
}
 
export default LoadingComponent
 