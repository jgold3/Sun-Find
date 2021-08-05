import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import MapScreen from '../screens/Map';
import AddLocationScreen from '../screens/AddLocation';
import UserProfileScreen from '../screens/UserProfile';
import { getToken } from '../api/token';

const Tab = createBottomTabNavigator();

export default Home = ({ navigation }) => {

  const [authToken, setAuthToken] = useState(null);

  getAuthToken = async () => {
    let token = await getToken();
    console.log(token);
    if (!token) {
      navigation.navigate('Login');
    }
    setAuthToken(token);
  };

  useFocusEffect(
    useCallback(() => {
      if (authToken === null) {
        console.log("HERE");
        getAuthToken();
      }
      return () => {
        console.log("Clean up time");
        setAuthToken(null);
      }
    },[])
  );

  return (
      <Tab.Navigator
        initialRouteName="Map"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == 'Map') {
              iconName = focused ? 'find' : 'find';
            }
            else if (route.name == 'AddLocation') {
              iconName = focused ? 'pluscircleo' : 'pluscircleo';
            }
            else if (route.name == 'UserProfile') {
              iconName = focused ? 'user' : 'user';
            }
            return <AntDesign name={iconName} size={size} color={color}/>
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel: false,
          style: {
            backgroundColor: '#f5f5f5'
          },
        }}>
          <Tab.Screen name="Map" component={MapScreen}/>
          <Tab.Screen name="AddLocation" component={AddLocationScreen}/>
          <Tab.Screen name="UserProfile" component={UserProfileScreen} />
      </Tab.Navigator>
  );
}