import { StackNavigationProp } from "@react-navigation/stack";
import React, { useRef, useState } from "react";
import { Button, StyleSheet, Image, Text, Animated } from "react-native";
import { View } from "react-native";
import { ParamList } from "../ParamList";
const skate = require("../../assets/dice/skate.png");
const heart = require("../../assets/dice/heart.png");
const regular = require("../../assets/dice/regular.png");
const switchStance = require("../../assets/dice/switch.png");
const fakie = require("../../assets/dice/fakie.png");
const nollie = require("../../assets/dice/nollie.png");
const shuvit = require("../../assets/dice/shuvit.png");
const oneeighty = require("../../assets/dice/180.png");
const threesixty = require("../../assets/dice/360.png");
const bigspin = require("../../assets/dice/bigspin.png");
const heelflip = require("../../assets/dice/heelflip.png");
const kickflip = require("../../assets/dice/kickflip.png");
const frontside = require("../../assets/dice/frontside.png");
const backside = require("../../assets/dice/backside.png");

export interface TrickDiceProps {
  navigation: StackNavigationProp<ParamList, "TrickDice">;
}

export const TrickDice: React.FC<TrickDiceProps> = ({ navigation }) => {
  const [direction, setDirection] = useState<any>(skate);
  const [stance, setStance] = useState<any>(skate);
  const [rotation, setRotation] = useState<any>(skate);
  const [flip, setFlip] = useState<any>(skate);
  const animate = useRef<any>(new Animated.Value(100)).current;
  const spinValue = new Animated.Value(0);
  Animated.timing(
    spinValue,
  {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true  // To make use of native driver for performance
  }
).start()
const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
})
  const directionArr: any[] = [
    skate,
    heart,
    backside,
    frontside,
    skate,
    heart,
  ];
  const stanceArr: any[] = [
    regular,
    fakie,
    nollie,
    switchStance,
    skate,
    heart,
  ];
  const rotationArr: any[] = [
    oneeighty,
    threesixty,
    shuvit,
    bigspin,
    skate,
    heart,
  ];
  const flipArr: any[] = [kickflip, heelflip, skate, heart, skate, heart];
  const roll = (): void => {
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
    <View style={{backgroundColor: "grey"}}>
      <View style={styles.diceColumn}>
        <View style={styles.diceRow}>
        <Animated.View
        style={[
          styles.dice,
          {
            transform: [{rotate: spin}],
          },
        ]}>
        <Image style={styles.dice} source={stance} />
      </Animated.View>
          
          <Image style={styles.dice} source={direction} />
        </View>
        <View style={styles.diceRow}>
          <Image style={styles.dice} source={rotation} />
          <Image style={styles.dice} source={flip} />
        </View>
      </View>
      <Button
        title="Roll"
        onPress={() => {
          roll();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dice: {
    width: 150,
    height: 150,
    margin: 10,
  },
  diceRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  diceColumn: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
