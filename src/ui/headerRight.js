//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';
import {AttachCircle, More, Share} from 'iconsax-react-native';

// create a component
const HeaderRight = () => {
  return (
    <View style={styles.container}>
      <AttachCircle size="18" color={AppColors.BLACK} />
      <Share size="18" color={AppColors.BLACK} />
      <More size="18" color={AppColors.BLACK} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});

//make this component available to the app
export default HeaderRight;
