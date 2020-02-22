import React from "react";
import {View, Text, ViewPropTypes, StyleSheet} from "react-native";
import CheckBox from "react-native-check-box";
import PropTypes from "prop-types";
import Scale from "../../helpers/Scale";
import constants from "../../constants";
const CheckboxComponent = props => {
  return (
    <View style={[styles.container, props.style]}>
      <CheckBox
        style={styles.checkBox}
        testID={props.testID}
        checkBoxColor={props.tintColor}
        onClick={props.onClick}
        isChecked={props.isChecked}
        checkedCheckBoxColor={props.tintColor}
        uncheckedCheckBoxColor={props.tintColor}
        disabled={props.disabled}
      />
      <Text style={[styles.textStyle, props.textStyle]}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  checkBox: {padding: Scale.moderateScale(5)},
  textStyle: {
    ...constants.Fonts.HeeboMedium,
    fontSize: Scale.moderateScale(14),
    color: constants.Colors.Primary,
  },
});
CheckboxComponent.propTypes = {
  style: ViewPropTypes.style,
  testID: PropTypes.string,
  tintColor: PropTypes.string,
  onClick: PropTypes.func,
  isChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  textStyle: ViewPropTypes.style,
};
CheckboxComponent.defaultProps = {
  style: {},
  testID: "",
  tintColor: "",
  onClick: () => {},
  isChecked: false,
  disabled: false,
  title: "",
  textStyle: {},
};

export default CheckboxComponent;
