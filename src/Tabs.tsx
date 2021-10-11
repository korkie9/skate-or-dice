import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TrickDice } from "./screens/TrickDice";
import { LedgeDice } from "./screens/LedgeDice";
import { ParamList } from "./ParamList";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

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
          tabBarLabel: "Tricks",
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
        name="LedgeDice"
        component={LedgeDice}
        options={{
          headerShown: false,
          tabBarLabel: "Ledges",
          tabBarIcon: ({ color, size }) => (
            <View style={{ transform: [{ rotate: "180deg" }] }}>
              <MaterialIcons name="space-bar" size={size} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
