import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Image, Text } from "react-native";
import { View } from "react-native";
import { Di } from "../components/Di";
import { ParamList } from "../ParamList";
import { DeviceMotion } from "expo-sensors";

const tailslide = require("../../assets/dice/tailslide.png");
const noseslide = require("../../assets/dice/noseslide.png");
const bluntslide = require("../../assets/dice/bluntslide.png");
const nosebluntslide = require("../../assets/dice/nosebluntslide.png");
const fiveogrind = require("../../assets/dice/5-0grind.png");
const nosegrind = require("../../assets/dice/nosegrind.png");
const crookedgrind = require("../../assets/dice/crookedgrind.png");
const overcrook = require("../../assets/dice/overcrook.png");
const suski = require("../../assets/dice/suski.png");
const salad = require("../../assets/dice/salad.png");
const smith = require("../../assets/dice/smith.png");
const feeble = require("../../assets/dice/feeble.png");
const blank = require("../../assets/dice/blankGrind.png");
const fiftyfifty = require("../../assets/dice/fiftyfifty.png");

const regular = require("../../assets/dice/regular.png");
const switchStance = require("../../assets/dice/switch.png");
const fakie = require("../../assets/dice/fakie.png");
const nollie = require("../../assets/dice/nollie.png");

const backside = require("../../assets/dice/backside.png");
const frontside = require("../../assets/dice/frontside.png");

const skate = require("../../assets/dice/skate.png");
const heart = require("../../assets/dice/heart.png");

export interface LedgeDiceProps {
  navigation: StackNavigationProp<ParamList, "TrickDice">;
}

export const LedgeDice: React.FC<LedgeDiceProps> = ({ navigation }) => {
  const [direction, setDirection] = useState<any>(skate);
  const [stance, setStance] = useState<any>(skate);
  const [grind, setGrind] = useState<any>(blank);

  const grinds: any = [
    tailslide,
    noseslide,
    bluntslide,
    nosebluntslide,
    nosegrind,
    fiveogrind,
    crookedgrind,
    overcrook,
    salad,
    suski,
    feeble,
    fiftyfifty,
    smith,
  ];
  const stances: any[] = [switchStance, regular, fakie, nollie, skate, heart];
  const directions: any[] = [backside, frontside, skate, heart, skate, heart];

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
    setDirection(directions[randomValue(6)]);
    setStance(stances[randomValue(6)]);
    setGrind(grinds[randomValue(13)]);
  };

  const randomValue = (numberOfSides: number): number => {
    return Math.floor(Math.random() * numberOfSides + 0);
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
          <Di image={grind} />
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
