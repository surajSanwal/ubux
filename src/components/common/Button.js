import React from "react";
import {TouchableOpacity, Text, ViewPropTypes, StyleSheet} from "react-native";
import PropTypes from "prop-types";
import Scale from "../../helpers/Scale";
import constants from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome";
const Button = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={[styles.container, props.style]}>
      {props.icon && (
        <Icon
          name={props.icon}
          style={styles.icon}
          color={constants.Colors.Primary}
          size={Scale.moderateScale(15)}
        />
      )}
      <Text style={[styles.textStyle, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};
Button.defaultProps = {
  disabled: false,
  onPress: () => {},
};
Button.propTypes = {
  textStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    borderWidth: Scale.moderateScale(2),
    borderColor: "#e5e5e5",
    padding: Scale.moderateScale(10),
    borderRadius: Scale.moderateScale(5),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: constants.Colors.Black,
    shadowOffset: {height: 0, width: 1},
    shadowOpacity: 0.1,
    shadowRadius: Scale.moderateScale(1),
    flexDirection: "row",
    backgroundColor: "white",
  },
  icon: {marginRight: Scale.moderateScale(5)},
  textStyle: {
    ...constants.Fonts.HeeboMedium,
    color: constants.Colors.Primary,
    fontSize: Scale.moderateScale(14),
    fontWeight: "500",
    fontStyle: "normal",
  },
});
export default Button;
