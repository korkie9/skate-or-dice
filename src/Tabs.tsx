import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TrickDice } from './screens/TrickDice';
import { LedgeDice } from './screens/LedgeDice'
import { ParamList } from './ParamList';

const Tab = createBottomTabNavigator<ParamList>();

interface RouteProps {}
export const  Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="TrickDice"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="TrickDice"
        component={TrickDice}
        options={{
          tabBarLabel: 'Trick',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="LedgeDice"
        component={LedgeDice}
        options={{
          tabBarLabel: 'LedgeDice',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}