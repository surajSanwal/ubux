import React from 'react';
import {View, Text, ViewPropTypes} from 'react-native';
import constants from '../../constants';
import PropTypes from 'prop-types';
import {moderateScale} from '../../helpers/Scale';

const Card = props => {
  return (
    <View
      style={[
        {
          backgroundColor: constants.Colors.White,
          padding: moderateScale(15),
          borderRadius: moderateScale(8),
        },
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

Card.propTypes = {
  style: ViewPropTypes.style,
};
export default Card;
