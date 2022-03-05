import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import LoginScreen from './src/screens/LoginScreen'
import SearchScreen from './src/screens/SearchScreen'
import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import CartScreen from './src/screens/CartScreen'
import Home from './src/screens/Home'
import DetailScreen from './src/screens/DetailScreen'
import { DrawerContent } from './src/components/DrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavi = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#FCB040',

        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="home" size={22} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="search" size={22} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => {
            return (
              <FontAwesome5 name="shopping-cart" size={22} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="user" size={22} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={TabNavi}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Cart"
          component={CartScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Details"
          component={DetailScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Search"
          component={SearchScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Profile"
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})
