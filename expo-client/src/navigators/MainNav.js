import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import MapScreen from '../screens/map';
import PicSelectScreen from '../screens/Picture_selection';
import UserProfileScreen from '../screens/user_profile';

const Tab = createBottomTabNavigator();

export default MainNav = () => {
  return (
      <Tab.Navigator
        initialRouteName="Map"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;
            if (route.name == 'Map') {
              iconName = focused ? 'find' : 'find';
            }
            else if (route.name == 'PicSelect') {
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
        }}>
          <Tab.Screen name="Map" component={MapScreen}/>
          <Tab.Screen name="PicSelect" component={PicSelectScreen}/>
          <Tab.Screen name="UserProfile" component={UserProfileScreen}/>
      </Tab.Navigator>
  );
}