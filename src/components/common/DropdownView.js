import PropTypes from "prop-types";
import React from "react";
import {View, StyleSheet} from "react-native";
import {Dropdown} from "react-native-material-dropdown";
// import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
import Scale from "../../helpers/Scale";
const DropdownView = props => {
  return (
    <View style={[styles.container, props.style]}>
      <Dropdown
        label={props.label}
        labelProps={{}}
        data={props.data}
        selectedItemColor={constants.Colors.Primary}
        textColor={constants.Colors.Primary}
        baseColor={constants.Colors.Primary}
        pickerStyle={styles.pickerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        overlayStyle={{}}
        itemTextStyle={styles.itemTextStyle}
        itemColor={constants.Colors.White}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Scale.moderateScale(40),
    justifyContent: "center",
  },
  pickerStyle: {
    backgroundColor: constants.Colors.White,
    marginTop: Scale.moderateScale(40),
    width: "14%",
  },
  inputContainerStyle: {borderBottomColor: "transparent"},
  itemTextStyle: {color: constants.Colors.Black},
});

DropdownView.defaultProps = {
  label: "Label",
  data: [],
};

DropdownView.propsTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default DropdownView;
