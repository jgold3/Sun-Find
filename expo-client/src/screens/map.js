import React, { useCallback, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SunriseMarker from '../components/SunriseMarker';
import UserMarker from '../components/UserMarker';
import styles from './styles/map.style';

export default MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [havePermission, setHavePermission] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [region, setRegion] = useState(null);

  const [coordinates, setCoordinates] = useState([
    {name: '1', latitude: 39.261610, longitude: -76.691582},
    {name: '2', latitude: 39.260988, longitude: -76.697096},
    {name: '3', latitude: 39.262610, longitude: -76.691682},
    {name: '4', latitude: 39.260257, longitude: -76.693888},
    {name: '5', latitude: 39.261220, longitude: -76.692086},
  ]);

  getLocation = async () => {
    if (!havePermission) {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted') {
        setErrMsg('Permission to access location was denied');
        setHavePermission(false);
        return
      }
      setHavePermission(true);
    }
    
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    setRegion({latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421});
  
  };


  useFocusEffect(
    useCallback(() => {
      getLocation();

      return () => {
        setLocation(null);
        setRegion(null);
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      {
        errMsg ? <Text>{errMsg}</Text> :
          havePermission && (location === null || region === null) ? ( <ActivityIndicator size="large" color="#ff4500" /> ) : (
            <MapView 
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              region={region}
            > 
              {location ? <UserMarker location={location} /> : null}
              {
                coordinates.map(coord => (
                  <SunriseMarker
                    key={coord.name}
                    name={coord.name}
                    coordinate={{latitude: coord.latitude, longitude: coord.longitude}}
                    image={require('../../assets/logo.png')}
                  />
                ))
              }
            </MapView>
          )
      }
      <StatusBar style="dark" />
    </View>
  );
};