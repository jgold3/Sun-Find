import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/SignUp';
import Home from './Home';

const Stack = createStackNavigator();

export default Main = () => {
    return (
        <Stack.Navigator initialRouteName="SunFind" >
            <Stack.Screen name="Login" component={LoginScreen} options={{headerLeft: () => null}} />
            <Stack.Screen name="Sign Up" component={SignUpScreen} />
            <Stack.Screen name="SunFind" component={Home} options={{headerShown: false}} />   
        </Stack.Navigator> 
         
    );
};