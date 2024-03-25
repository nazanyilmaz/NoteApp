//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {screenStyle} from '../style/screenStyle';
import {AppColors} from '../theme/colors';

// create a component
const Button = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.BLUE,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  title: {
    color: AppColors.WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
});

//make this component available to the app
export default Button;
