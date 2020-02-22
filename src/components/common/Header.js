import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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
        flex: 1,
      }}>
      {props.leftIcon && (
        <Icon
          name={props.leftIcon}
          style={styles.icon}
          size={props.iconSize || 12}
          color={props.color || constants.Colors.Black}
        />
      )}
      <Text
        style={{
          fontSize: Scale.moderateScale(17),
          ...constants.Fonts.LeagueSpartanBold,
          color: constants.Colors.Black,
        }}>
        {props.title}
      </Text>
      {props.rightIcon && (
        <Icon
          name={props.rightIcon}
          style={styles.icon}
          size={props.iconSize || 18}
          color={props.color || constants.Colors.Black}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  icon: {
    marginHorizontal: Scale.moderateScale(10),
  },
});
export default Header;
