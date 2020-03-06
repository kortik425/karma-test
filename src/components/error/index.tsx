import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
 
type propTypes = {
  error: any,
}

const ErrorComponent = ({error}: propTypes) => {
  const [errorText, setErrorText] = useState('')
  useEffect(()=>{
    async function getErrorText() {
      const text = await error.msg;
      setErrorText(text);
    }
    getErrorText();
  });
  return (
    <View style={styles.container}>
        <Text style={[styles.text, {fontSize:25}]}>Error: {error.status}</Text>
        <Text style={styles.text}>{errorText}</Text>
    </View>
  )
}
 
export default ErrorComponent
 