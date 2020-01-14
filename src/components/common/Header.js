import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Scale from '../../helpers/Scale';
import constants from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {props.leftIcon && (
        <Icon
          name={props.leftIcon}
          style={styles.icon}
          size={props.iconSize || 18}
          color={props.color || constants.Colors.Primary}
        />
      )}
      <Text
        style={{
          fontSize: Scale.moderateScale(20),
          ...constants.Fonts.LeagueSpartanBold,
          color: constants.Colors.Primary,
        }}>
        {props.title}
      </Text>
      {props.rightIcon && (
        <Icon
          name={props.rightIcon}
          style={styles.icon}
          size={props.iconSize || 18}
          color={props.color || constants.Colors.Primary}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  icon: {
    marginHorizontal: Scale.moderateScale(5),
  },
});
export default Header;
