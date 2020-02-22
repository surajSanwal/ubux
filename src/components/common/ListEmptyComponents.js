import React from "react";
import {View, Text, Dimensions, StyleSheet} from "react-native";
import Scale from "../../helpers/Scale";
const {height, width} = Dimensions.get("screen");
const ListEmptyComponents = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.message}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: height / 1.5,
    width,
  },
  text: {
    color: "grey",
    fontSize: Scale.moderateScale(20),
  },
});

export default ListEmptyComponents;
