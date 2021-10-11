import React, { useRef } from "react";
import { Animated, Image, StyleSheet } from "react-native";

interface Props {
  image: any;
}

export const Di: React.FC<Props> = ({image}) => {
  const animate = useRef<any>(new Animated.Value(100)).current;
  const spinValue = new Animated.Value(0);
  Animated.timing(spinValue, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <Animated.View
      style={[
        styles.dice,
        {
          transform: [{ rotate: spin }],
        },
      ]}
    >
      <Image style={styles.dice} source={image} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  dice: {
    width: 150,
    height: 150,
    margin: 10,
  },
});
