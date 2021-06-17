import React from 'react';
import { Image, Text } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import styles from './styles/Marker.style';

export default SunriseMarker = ({ name, coordinate, image}) => {
    return (
        <Marker coordinate={{latitude: coordinate.latitude, longitude: coordinate.longitude}}>
            <Callout >
                <Image source={image}/>
                <Text>{name}</Text>
            </Callout>
            <Image style={styles.image} source={require('../../assets/logo.png')}/>
        </Marker>
    );
}