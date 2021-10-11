import { StackNavigationProp } from "@react-navigation/stack";
import { DeviceMotion } from "expo-sensors";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Image, Text, Animated } from "react-native";
import { View } from "react-native";
import { Di } from "../components/Di";
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

  const directionArr: any[] = [skate, heart, backside, frontside, skate, heart];
  const stanceArr: any[] = [regular, fakie, nollie, switchStance, skate, heart];
  const rotationArr: any[] = [
    oneeighty,
    threesixty,
    shuvit,
    bigspin,
    skate,
    heart,
  ];
  const flipArr: any[] = [kickflip, heelflip, skate, heart, skate, heart];
  useEffect(() => {
    _motionSubscribe();
    return () => {
      _motionUnsubscribe();
    };
  }, []);

  const _motionSubscribe = () => {
    DeviceMotion.addListener((devicemotionData) => {
      const motion = devicemotionData.acceleration;
      if (motion?.x && motion?.y && motion?.z) {
        if (motion.x > 1 && motion.y > 1 && motion.z > 1) {
          roll();
        }
      }
    });
  };

  const _motionUnsubscribe = () => {
    DeviceMotion.removeAllListeners();
  };
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
    <View
      style={{
        backgroundColor: "darkcyan",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <View style={styles.diceColumn}>
        <View style={styles.diceRow}>
          <Di image={stance} />
          <Di image={direction} />
        </View>
        <View style={styles.diceRow}>
          <Di image={rotation} />
          <Di image={flip} />
        </View>
      </View>
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
