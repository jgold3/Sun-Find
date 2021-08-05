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
    {name: '1', latitude: 39.470912, longitude: -75.888454},
    {name: '2', latitude: 39.474624, longitude: -75.878442},
    {name: '3', latitude: 39.466430, longitude: -75.877609},
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