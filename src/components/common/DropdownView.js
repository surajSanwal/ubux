import React from 'react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import PropTypes from 'prop-types';
// import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from '../../constants';
import Scale from '../../helpers/Scale';
import TextInputComponent from './TextInput';
const DropdownView = props => {
  return (
    <View
      style={[
        {
          width: '20%',
          height: Scale.moderateScale(40),
          justifyContent: 'center',
        },
        props.style,
      ]}>
      <Dropdown
        label={props.label}
        labelProps={{}}
        data={props.data}
        selectedItemColor={constants.Colors.Primary}
        textColor={constants.Colors.Primary}
        baseColor={constants.Colors.Primary}
        pickerStyle={{
          backgroundColor: constants.Colors.White,
          marginTop: Scale.moderateScale(40),
          width: '14%',
          left: Scale.moderateScale(constants.BaseStyle.DEVICE_WIDTH * 0.4),
        }}
        overlayStyle={{}}
        itemTextStyle={{color: constants.Colors.Black}}
        itemColor={constants.Colors.White}
      />
    </View>
  );
};

DropdownView.defaultProps = {
  label: 'Label',
  data: [],
};

DropdownView.propsTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default DropdownView;
