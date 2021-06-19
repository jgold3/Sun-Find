import React, {useState} from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { setToken } from '../api/token';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default UserProfileScreen = ({ route, navigation }) => {
  let logout = async () => {
    await setToken('');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text>User Profile Screen!</Text>
      <Button title="Log Out" onPress={logout}/>
    </View>
  );
};