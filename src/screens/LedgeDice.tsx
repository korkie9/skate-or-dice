import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  Button,
  StyleSheet,
  Image,
  Text
} from "react-native";
import { View } from "react-native";
import { ParamList } from "../ParamList";

export interface LedgeDiceProps {
  navigation: StackNavigationProp<ParamList, "LedgeDice">;
}

export const LedgeDice: React.FC<LedgeDiceProps> = ({ navigation }) => {
  
  return (
    <View>
        <Text>Hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 150,
    alignItems: "center",
    backgroundColor: "darkcyan",
    margin: 3,
    borderRadius: 5,
  },
});