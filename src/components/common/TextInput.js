import React from 'react';
import {View, Text, TextInput, ViewPropTypes} from 'react-native';
import Scale from '../../helpers/Scale';
import constants from '../../constants';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TextInputComponent = props => {
  return (
    <View
      style={[
        {
          margin: Scale.moderateScale(5),
        },
        props.style,
      ]}>
      <View
        style={[
          {
          borderWidth: Scale.moderateScale(1),
          borderColor: constants.Colors.Dark,
          borderRadius: Scale.moderateScale(10),
          padding: Scale.moderateScale(10),
          margin: Scale.moderateScale(5),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        props.style
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {props.icon && (
            <Icon
              name={props.icon}
              size={Scale.moderateScale(15)}
              color={constants.Colors.Dark}
              style={{marginRight: Scale.moderateScale(5)}}
            />
          )}
          <TextInput
            {...props}
            value={props.value}
            placeholder={props.placeholder || ''}
            style={[
              {
                color: constants.Colors.Primary,
                fontSize: Scale.moderateScale(16),
                ...constants.Fonts.HeeboMedium,
              },
              props.inputStyle,
            ]}
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
        <Text
          numberOfLines={1}
          style={{
            paddingHorizontal: Scale.moderateScale(5),
            fontSize: Scale.moderateScale(10.5),
            color: constants.Colors.Dark,
            ...constants.Fonts.HeeboMedium,
          }}>
          {props.example}
        </Text>
      )}
    </View>
  );
};
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
