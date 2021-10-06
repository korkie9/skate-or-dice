import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { Button, StyleSheet, Image, Text } from "react-native";
import { View } from "react-native";
import { ParamList } from "../ParamList";

export interface TrickDiceProps {
  navigation: StackNavigationProp<ParamList, "TrickDice">;
}

export const TrickDice: React.FC<TrickDiceProps> = ({ navigation }) => {
  const [direction, setDirection] = useState<string>("skate");
  const [stance, setStance] = useState<string>("skate");
  const [rotation, setRotation] = useState<string>("skate");
  const [flip, setFlip] = useState<string>("skate");
  const roll = (): void => {
    const directionArr: string[] = [
      "skate",
      "dice",
      "backside",
      "frontside",
      "skate",
      "dice",
    ];
    const stanceArr: string[] = [
      "regular",
      "fakie",
      "nollie",
      "switch",
      "skate",
      "dice",
    ];
    const rotationArr: string[] = [
      "180",
      "360",
      "shuvit",
      "bigspin",
      "skate",
      "dice",
    ];
    const flipArr: string[] = [
      "kickflip",
      "heelflip",
      "skate",
      "dice",
      "skate",
      "dice",
    ];
    setDirection(randomValue(directionArr));
    setStance(randomValue(stanceArr));
    setRotation(randomValue(rotationArr));
    setFlip(randomValue(flipArr));
  };
  const randomValue = (array: string[]): string => {
    const index: number = Math.floor(Math.random() * 5 + 0);
    return array[index];
  };

  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ margin: 5 }}>{stance}</Text>
        <Text style={{ margin: 5 }}>{direction}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ margin: 5 }}>{rotation}</Text>
        <Text style={{ margin: 5 }}>{flip}</Text>
      </View>
      <Button title="Roll" onPress={() => {roll()}}/>
    </View>
  );
};

const styles = StyleSheet.create({});
