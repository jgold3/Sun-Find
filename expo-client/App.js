import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import LoginScreen from './pages/login.js';

let MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Map Screen!</Text>
    </View>
  );
};

let PicSelectScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Picture Screen!</Text>
    </View>
  );
};

let UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>User Profile Screen!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
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
          <Tab.Screen name="PicSelect" component={LoginScreen}/>
          <Tab.Screen name="UserProfile" component={UserProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
