import { StyleSheet, ViewStyle } from 'react-native';
import variables from '../../variables';

interface Styles {
    container: ViewStyle;
    secondColumn: ViewStyle;
}

export default StyleSheet.create<Styles>({
    container: { 
        flexDirection:"row",
        alignItems:"center",
        borderColor: variables.mainColor,
        backgroundColor: variables.secondaryColor,
        borderRadius: 15,
        borderWidth: 2,
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 5,
        flex:1,
    },
    secondColumn: {
        flex:2
    }
  });