import React, {useEffect} from 'react';
import { StyleSheet, SafeAreaView, Image, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import LoadingComponent from './components/loading';
import ErrorComponent from './components/error';
import LocationList from './components/location-list';
import logo from './assets/Karma-logo-pink.png';
import variables from './variables';
import { Location } from './types';

type propTypes = {
  locations: Array<Location> 
  fetchLocations: () => void,
  actionState: 'INIT'|'LOADING'|'ERROR'|'SUCCESS', 
  error?: string, 
}

const Root = ({locations, fetchLocations, actionState, error}: propTypes) => {
    useEffect(()=>{
      if(locations.length === 0)
        fetchLocations();
    }, [locations]);

    let Children = null;

    switch(actionState){
        case 'LOADING':
            Children = <LoadingComponent />;
            break; 
        case 'ERROR':
            Children = <ErrorComponent error={error}/>;
            break;
        case 'SUCCESS':
            Children = <LocationList locations={locations}/>
            break;
        default:
            Children = null;
    }

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Image style={styles.logo} source={logo} />
        {Children} 
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: variables.backgroundColor,
        paddingTop: Constants.statusBarHeight,
      },
      logo: {
        alignSelf: "center",
        margin:15,
        width:90,
        height:90
      }
    });

    export default Root;