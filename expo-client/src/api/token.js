import AsyncStorage from '@react-native-async-storage/async-storage'; // Needs to be replaced by SecureStore
// import SecureStore from 'expo-secure-store';

export const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('@auth_token');
        // const value = await SecureStore.getItemAsync('@auth_token');
        if (value !== null) {
            return value;
        }
    } catch (e) {
        return null;
    }
};

export const setToken = async (token) => {
    try {
        await AsyncStorage.setItem('@auth_token', token);
        // await SecureStore.setItemAsync('@auth_token', token);
    } catch (e) {
        return null;
    }
};