import React from "react";
import {View, Text, TextInput, ViewPropTypes, StyleSheet} from "react-native";
import Scale from "../../helpers/Scale";
import constants from "../../constants";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome5";

const TextInputComponent = props => {
  return (
    <View style={[{}, props.style]}>
      <View style={[styles.container, props.style]}>
        <View style={styles.iconView}>
          {props.icon && (
            <Icon
              name={props.icon}
              size={Scale.moderateScale(15)}
              color={constants.Colors.Dark}
              style={styles.icon}
            />
          )}
          <TextInput
            {...props}
            value={props.value}
            placeholder={props.placeholder || ""}
            style={[styles.inputStyle, props.inputStyle]}
            placeholderTextColor={constants.Colors.Dark}
            onChangeText={props.onChangeText}
          />
        </View>
        {props.value && props.value.length ? (
          <Icon
            name="times"
            size={Scale.moderateScale(12)}
            color={constants.Colors.Primary}
            onPress={props.onClear}
          />
        ) : null}
      </View>
      {props.example && (
        <Text numberOfLines={1} style={styles.text}>
          {props.example}
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: Scale.moderateScale(2),
    borderColor: constants.Colors.Background,
    borderRadius: Scale.moderateScale(5),
    padding: Scale.moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {marginRight: Scale.moderateScale(5)},
  inputStyle: {
    color: constants.Colors.Primary,
    fontSize: Scale.moderateScale(12),
    ...constants.Fonts.HeeboMedium,
  },
  text: {
    paddingHorizontal: Scale.moderateScale(5),
    fontSize: Scale.moderateScale(10.5),
    color: constants.Colors.Dark,
    ...constants.Fonts.HeeboMedium,
  },
});
TextInputComponent.defaultProps = {
  onClear: () => {},
};
TextInputComponent.propTypes = {
  placeholder: PropTypes.string,
  onClear: PropTypes.func,
  onChangeText: PropTypes.func,
  style: ViewPropTypes.style,
  inputStyle: ViewPropTypes.inputStyle,
  icon: PropTypes.string,
};
export default TextInputComponent;
