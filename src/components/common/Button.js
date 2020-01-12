import React from 'react';
import {TouchableOpacity, Text, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import Scale from '../../helpers/Scale';
import constants from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
const Button = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={[
        {
          borderWidth: Scale.moderateScale(0.5),
          borderColor: constants.Colors.Background,
          padding: Scale.moderateScale(10),
          borderRadius: Scale.moderateScale(8),
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: constants.Colors.Black,
          shadowOffset: {height: 0, width: 1},
          shadowOpacity: 0.5,
          shadowRadius: Scale.moderateScale(8),
          flexDirection: 'row',
          maxHeight: Scale.moderateScale(45),
        },
        props.style,
      ]}>
      {props.icon && (
        <Icon
          name={props.icon}
          style={{marginRight: Scale.moderateScale(5)}}
          color={constants.Colors.Primary}
          size={Scale.moderateScale(15)}
        />
      )}
      <Text
        style={[
          {
            ...constants.Fonts.HeeboMedium,
            color: constants.Colors.Primary,
            fontSize: Scale.moderateScale(12),
          },
          props.textStyle,
        ]}>
        {props.title}
      </Text>
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
export default Button;
