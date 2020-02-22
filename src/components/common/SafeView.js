import React from "react";
import {View, StyleSheet} from "react-native";
import Scale from "../../helpers/Scale";

const SafeView = props => {
  return <View style={styles.container}>{props.child}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Scale.moderateScale(20),
    backgroundColor: "red",
  },
});
export default SafeView;
