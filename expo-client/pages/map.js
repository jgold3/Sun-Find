import React, {Component} from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
        };
    }

    render = () => (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    );
};