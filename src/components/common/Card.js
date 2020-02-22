import React from "react";
import {View, ViewPropTypes, StyleSheet} from "react-native";
import constants from "../../constants";
import {moderateScale} from "../../helpers/Scale";

const Card = props => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.Colors.White,
    padding: moderateScale(15),
    borderRadius: moderateScale(8),
  },
});

Card.propTypes = {
  style: ViewPropTypes.style,
};
export default Card;
