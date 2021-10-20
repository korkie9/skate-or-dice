import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { ParamList } from "../ParamList";

interface RulesProps {
  navigation: StackNavigationProp<ParamList, "Rules">;
}

export const Rules: React.FC<RulesProps> = ({ navigation }) => {
  const General: React.FC = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>General Rules</Text>
        <Text style={styles.paragraph}>
          1. Select which dice you'd like to use from the bottom tabs.
        </Text>
        <Text style={styles.paragraph}>
          2. Shake the phone till you see the dice change.
        </Text>
        <Text style={styles.paragraph}>
          3. Inspect dice to determine the trick that must be done.
        </Text>
        <Text style={styles.paragraph}>
          4. Consult the instructions below on how to read each specific group
          of dice.
        </Text>
      </View>
    );
  };

  const Flatground: React.FC = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Flatground</Text>
        <Text style={styles.paragraph}>
          1. Die number one shows the stance that the trick must be done in. Do
          not get confused between your natural stance and the trick stance.
          Regular simply means assume your natural stance and pop your tail
          when performing the trick.
        </Text>
        <Text style={styles.paragraph}>
          Switch means assume your least natural stance i.e if your natural
          stance is regular (you skate with your right foot at the back), swtich
          would be with your left foot at the back and popping from the tail
          and visa versa for goofy skaters.
        </Text>
        <Text style={styles.paragraph}>
          Nollie means assume your natural position but pop the board from the
          nose.
        </Text>
        <Text style={styles.paragraph}>
          Fakie means assume your switch stance and pop the board from the nose.
        </Text>
        <Text style={styles.paragraph}>
          2. Die number two shows in which direction (if any) you must turn,
          depending on your stance. If you are regular (right foot at the back)
          and standing in regular position, 'frontside' means you would turn
          counterclockwise, whereas 'backside' means you turn clockwise. This is
          the same when standing in fakie and nollie stance. When standing in
          switch stance however, 'backside' would be counterclockwise and
          'frontside' would be clockwise. Goofy footed skaters do everything the
          same except in the opposite direction.
        </Text>
        <Text style={styles.paragraph}>
          3. Die number three shows how you and/or the board must turn.
        </Text>
        <Text style={styles.paragraph}>
          180 means rotate 180 degrees with your board. Similarly, 360 means
          rotate 360 degrees with your board.
        </Text>
        <Text style={styles.paragraph}>
          'Shuvit' means just the board rotates 180 degrees on the y axis (like
          a spinning top).
        </Text>
        <Text style={styles.paragraph}>
          'Bigspin' means you spin 180 degrees, while your board 360 degrees. It
          is the combination of a 180 and shuvit.
        </Text>
        <Text style={styles.paragraph}>
          4. Die number 4 shows which flip to do.
        </Text>
        <Text style={styles.paragraph}>
          A 'Heelflip' is when the heel is kicked forward and board flips 360
          degrees on its x axis like a rotisserie chicken.
        </Text>
        <Text style={styles.paragraph}>
          A 'Kickflip' is like a heelflip but in the opposite direction.
        </Text>
        <Text style={styles.paragraph}>
          5. If a die lands on 'skate' or on a heart, omit that die from the
          trick description
        </Text>
        <Text style={styles.paragraph}>
          5. If three hearts or three 'skate' dice are shown, take the remaining
          die and add a variation
        </Text>
        <Text style={styles.paragraph}>
          6. If a shuvit or bigspin is shown along with a flip, combine those
          tricks into a secondary trick i.e shuvit + kickflip = varial flip or
          bigspin + heelflip = bigspin heelflip
        </Text>
        <Text style={styles.paragraph}>
          7. If a '360' and a 'kickflip' is thrown, the skater may choose to do
          a full 360 turn with a kickflip or do a treflip (360 shuvit +
          kickflip)
        </Text>
        <Text style={styles.paragraph}>
          8. If 'backside' or 'frontside' is thrown and no degree of rotation is
          specified, a 180 must be done in that direction
        </Text>
        <Text style={styles.paragraph}>
          9. If no stance is specified, the trick must be done in regular stance
        </Text>
      </View>
    );
  };
  const Manuel: React.FC = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Manuels</Text>
        <Text style={styles.paragraph}>
          1. Die number one shows the stance that the trick must be done in
        </Text>
        <Text style={styles.paragraph}>
          2. Die number two shows type of manuel that must be done.
        </Text>
        <Text style={styles.paragraph}>
          If no manuel is shown, the player is free to pick which manuel they
          would like to do.
        </Text>
        <Text style={styles.paragraph}>
          3. Die number three shows if there is a variation that must be added
          and where in the trick that variation must occur.
        </Text>
        <Text style={styles.paragraph}>
          3. A variation entails anything beyond the trick decription. For
          instance, if 'skate', 'nosemanuel' and 'variation in' is thrown, a
          trick must be done before the nosemanuel happens or you can pop into
          the nosemanuel in a different stance, since a stance was not specified
          by the 'stance' die.
        </Text>
        <Text style={styles.paragraph}>
          4. In the event of three hearts or three 'skate' dice being thrown,
          the skater gets to pick what they want to do, so long as it involves a
          manuel of some kind.
        </Text>
        <Text style={styles.paragraph}>
          5. If two 'skate' dice are thrown and one heart or two hearts and one
          'skate' is thrown, no trick trick needs to be done.
        </Text>
        <Text style={styles.paragraph}>
          6. If a stance is thrown with two hearts or two 'skate' dice, the skater must choose a manual and add any variation.
        </Text>
        <Text style={styles.paragraph}>
          6. If a stance is thrown with one heart and one 'skate', the skater must choose a manual. No variation is needed.
        </Text>
      </View>
    );
  };
  const GrindsAndSlides: React.FC = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Grinds and Slides</Text>
        <Text style={styles.paragraph}>
          1. Die number one shows the stance that the trick must be done in.
        </Text>
        <Text style={styles.paragraph}>
          2. Die number two shows the direction the ledge or rail must be
          approached at. If 'frontside' is shown, the trick must be performed
          with the rail or ledge in front of the skater. If 'backside' is shown,
          the trick must be performed with the rail or ledge behind the skater
          as they approach it.
        </Text>
        <Text style={styles.paragraph}>
          3. Die number three shows the grind that must be done.
        </Text>
        <Text style={styles.paragraph}>
          4. If two way 'skate' or 'heart dice' is shown, the skater must take
          the grind die and add a variation.
        </Text>
        <Text style={styles.paragraph}>
          5. Players must agree beforehand if or not frontside overcrook exists.
          Should players agree that it doesn't and frontside overcrook is
          thrown, a nosegrind may be done instead.
        </Text>
        <Text style={styles.paragraph}>
          5. Players must agree beforehand if or not frontside Suski exists.
          Should players agree that it doesn't and frontside Suski or is thrown,
          a frontside 5-0 may be done instead.
        </Text>
      </View>
    );
  };
  return (
    <ScrollView style={{ flexDirection: "column", marginTop: 30 }}>
      <General />
      <Flatground />
      <Manuel />
      <GrindsAndSlides />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexDirection: "column",
  },
  heading: {
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    margin: 5,
    color: "darkcyan",
  },
  paragraph: {
    justifyContent: "center",
    textAlign: "center",
  },
});
