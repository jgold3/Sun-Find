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

  if (errMsg) {
    return (
      <View style={styles.container}>
        <Text>{errMsg}</Text>
      </View>
    );
  } 
  else if (havePermission && (location === null || region === null)) {
    console.log('Here boi')
    return (
      <ActivityIndicator size="large" color="#ff4500" />
    );
  }
  else if (!havePermission) {
    return (
      <View style={styles.container}>
        <Text>You need to accept request for location, if you want to post points</Text>
      </View>
    );
  }
  else {
    return (
      <View style={styles.container}>
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
                image={coord.images[0]}
              />
            ))
          }
        </MapView>
        <Carousel
            ref={(c) => { carousel = c; }}
            data={coordinates}
            renderItem={renderCarouselItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={200}
        />
      </View>
    );
  }
  

  // return (
  //   <View style={styles.container}>
  //     {
  //       errMsg ? <Text>{errMsg}</Text> :
  //         havePermission && (location === null || region === null) ? ( <ActivityIndicator size="large" color="#ff4500" /> ) : (
            // <MapView 
            //   style={styles.map}
            //   provider={PROVIDER_GOOGLE}
            //   region={region}
            // > 
            //   {location ? <UserMarker location={location} /> : null}
            //   {
            //     coordinates.map(coord => (
            //       <SunriseMarker
            //         key={coord.name}
            //         name={coord.name}
            //         coordinate={{latitude: coord.latitude, longitude: coord.longitude}}
            //         image={coord.images[0]}
            //       />
            //     ))
            //   }
            // </MapView>
            
  //         )
  //     }
      
  //   </View>
  // );
};