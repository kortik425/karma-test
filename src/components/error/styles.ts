import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
    container: ViewStyle;
    text: TextStyle;
}

export default StyleSheet.create<Styles>({
    container: { 
        flex:1,
        alignItems: 'center'
    },
    text: {
        fontSize:20, 
        textAlign:'center'
    }
  });