import React from 'react';
import { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons'; 

export default UserMarker = ({ location }) => {
    return (
        <Marker title={'My Location'} coordinate={location.coords}>
            <MaterialIcons name="my-location" size={30} color="#ff4500" />
        </Marker>
    );
}