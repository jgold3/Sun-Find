import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AddLocationScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Picture Screen!</Text>
      </View>
    );
};