import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    buttonContainer: ViewStyle;

}
export default StyleSheet.create<Styles>({
    buttonContainer: { 
        borderRadius:25, 
        paddingVertical:5, 
        width:100, 
        alignItems:"center"
    }
  });