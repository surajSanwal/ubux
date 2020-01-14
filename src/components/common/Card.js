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
          margin: moderateScale(10),
          padding: moderateScale(10),
          borderRadius: moderateScale(15),
        },
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

Card.propTypes = {
  style: ViewPropTypes.style,
  children: React.Children,
};
export default Card;
