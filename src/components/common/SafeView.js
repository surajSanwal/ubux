import React from 'react';
import {View} from 'react-native';
import Scale from '../../helpers/Scale';

const SafeView = props => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: Scale.moderateScale(20),
        backgroundColor: 'red',
      }}>
      {props.child}
    </View>
  );
};

export default SafeView;
