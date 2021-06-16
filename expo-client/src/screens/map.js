import React, {useState} from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles/map.style';

export default MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}/>
    </View>
  );
};