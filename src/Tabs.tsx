import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TrickDice } from "./screens/TrickDice";
import { GrindsAndSlidesDice } from "./screens/GrindsAndSlidesDice";
import { ManuelDice } from "./screens/ManualDice";
import { ParamList } from "./ParamList";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { Rules } from "./screens/Rules"
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<ParamList>();

interface RouteProps {}
export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="TrickDice"
      screenOptions={{
        tabBarActiveTintColor: "darkcyan",
      }}
    >
      <Tab.Screen
        name="TrickDice"
        component={TrickDice}
        options={{
          headerShown: false,
          tabBarLabel: "Flatground",
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="skateboard"
                size={size}
                color={color}
              />
          ),
        }}
      />
      <Tab.Screen
        name="GrindsAndSlidesDice"
        component={GrindsAndSlidesDice}
        options={{
          headerShown: false,
          tabBarLabel: "Grinds/Slides",
          tabBarIcon: ({ color, size }) => (
            <View style={{ transform: [{ rotate: "180deg" }] }}>
              <MaterialIcons name="space-bar" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ManuelDice"
        component={ManuelDice}
        options={{
          headerShown: false,
          tabBarLabel: "Manuel",
          tabBarIcon: ({ color, size }) => (
            <View style={{ transform: [{ rotate: "30deg" }] }}>
              <MaterialCommunityIcons
                name="skateboard"
                size={size}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Rules"
        component={Rules}
        options={{
          headerShown: false,
          tabBarLabel: "Rules",
          tabBarIcon: ({ color, size }) => (
            <View style={{ transform: [{ rotate: "180deg" }] }}>
              <Entypo name="menu" size={size} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
