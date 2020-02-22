import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Scale from '../../helpers/Scale';
const {height, width} = Dimensions.get('screen');
const ListEmptyComponents = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: height / 1.5,
        width,
      }}>
      <Text
        style={{
          color: 'grey',
          fontSize: Scale.moderateScale(20),
        }}>
        {props.message}
      </Text>
    </View>
  );
};

export default ListEmptyComponents;
