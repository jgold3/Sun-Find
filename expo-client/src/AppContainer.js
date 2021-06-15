import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginNav from './navigators/LoginNav';
import MainNav from './navigators/MainNav';
import getToken from './api/token';


export default AppContainer = () => {
    const [authToken, setAuthToken] = useState(null);

    useEffect(() => {
        getAuthToken = async () => {
            const token = await getToken();
            setAuthToken(token);
        }
        setAuthToken();
    },);
    return (
        <NavigationContainer>
            {authToken ? <MainNav />: <LoginNav/>} 
        </NavigationContainer>
    )
};