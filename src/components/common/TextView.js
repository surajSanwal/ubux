import React from "react";
import {View, Text, ViewPropTypes, StyleSheet} from "react-native";
import PropTypes from "prop-types";
import constants from "../../constants";
import {moderateScale} from "../../helpers/Scale";
const TextView = props => {
  return (
    <View style={[props.style]}>
      <Text
        numberOfLines={props.numberOfLines || 1}
        style={[
          styles.textStyle,
          {
            fontSize: moderateScale(props.fontSize || 15),
            color: props.fontColor || constants.Colors.Primary,
          },
          props.textStyle,
        ]}>
        {props.value}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {...constants.Fonts.HeeboMedium},
});
TextView.propTypes = {
  style: ViewPropTypes.style,
  children: React.Children,
  textStyle: ViewPropTypes.style,
  value: PropTypes.string.isRequired || PropTypes.number.isRequired,
  fontSize: PropTypes.number,
  fontColor: PropTypes.string,
  numberOfLines: PropTypes.number,
};

export default TextView;
