import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Image, Dimensions, View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
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

  const carousel = React.useRef(null);

  const [coordinates, setCoordinates] = useState([
    {name: '1', latitude: 39.470912, longitude: -75.888454, images: [require('../../assets/logo.png')]},
    {name: '2', latitude: 39.474624, longitude: -75.878442, images: [require('../../assets/logo.png')]},
    {name: '3', latitude: 39.466430, longitude: -75.877609, images: [require('../../assets/logo.png')]},
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

  const renderCarouselItem = ({ item, index }) => {
    <View>
      <Text>{item.name}</Text>
      <Image source={item.images[0]}/>
    </View>
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
          havePermission && (location === null || region === null) ? ( <ActivityIndicator size="large" color="#ff4500" /> ) : ( [
            <MapView
              key={0} 
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
                    image={coord.images[0]}
                  />
                ))
              }
            </MapView>,
            
            <Text key={1}>YOOOOO</Text>
            ]
          )
      }
      
    </View>
  );
};