import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/SignUp';
import MainNav from './MainNav';

const Stack = createStackNavigator();

export default LoginNav = () => {
    return (
        <Stack.Navigator initialRouteName="SunFind" >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Sign Up" component={SignUpScreen} />
        </Stack.Navigator>  
    );
};