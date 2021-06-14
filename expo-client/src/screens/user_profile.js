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

export default UserProfileScreen = () => {
    return (
      <View style={styles.container}>
        <Text>User Profile Screen!</Text>
      </View>
    );
};