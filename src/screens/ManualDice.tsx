import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Image, Text } from "react-native";
import { View } from "react-native";
import { Di } from "../components/Di";
import { ParamList } from "../ParamList";
import { DeviceMotion } from "expo-sensors";

const nosemanuel = require("../../assets/dice/nosemanuel.png");
const regularmanuel = require("../../assets/dice/manuelskate.png");
const skate = require("../../assets/dice/manuelskate.png");
const heart = require("../../assets/dice/manuelheart.png");
const regular = require("../../assets/dice/manuelregular.png");
const switchStance = require("../../assets/dice/manuelswitch.png");
const fakie = require("../../assets/dice/manuelfakie.png");
const nollie = require("../../assets/dice/manuelnollie.png");
const variationin = require("../../assets/dice/variationin.png");
const variationinandout = require("../../assets/dice/variationinandout.png");
const variationout = require("../../assets/dice/variationout.png");

export interface ManuelDiceProps {
  navigation: StackNavigationProp<ParamList, "ManuelDice">;
}

export const ManuelDice: React.FC<ManuelDiceProps> = ({ navigation }) => {
  const [stance, setStance] = useState<any>(skate);
  const [manuel, setManuel] = useState<any>(skate);
  const [variation, setVariation] = useState<any>(skate);
  const [hasRolled, setHasRolled] = useState<any>(false);

  const stances: any[] = [switchStance, regular, fakie, nollie, skate, heart];
  const manuels: any[] = [nosemanuel, regularmanuel, skate, heart, skate, heart];
  const variations: any[] = [variationin, variationout, variationinandout, heart, skate, heart, skate];
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
        if (motion.x > 10 || motion.y > 10 || motion.z > 10) {
          roll();
        }
      }
    });
  };

  const _motionUnsubscribe = () => {
    DeviceMotion.removeAllListeners();
  };

  const roll = (): void => {
    setManuel(manuels[randomValue(6)]);
    setStance(stances[randomValue(6)]);
    setVariation(variations[randomValue(7)]);
    setHasRolled(true)
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
          <Di image={manuel} />
        </View>
        {hasRolled ? (
          <View />
        ) : (
          <Text
            style={{
              textAlign: "center",
              width: 200,
              height: 50,
              fontSize: 25,
              fontWeight: "bold",
              color: "darkred",
              margin: 10
            }}
          >
            SHAKE TO ROLL
          </Text>
        )}
        <View style={styles.diceRow}>
          <Di image={variation} />
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