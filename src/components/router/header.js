//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screenHeight} from '../../utils/constans';
import {MYNOTES} from '../../utils/routes';
import {AppColors} from '../../theme/colors';
import {HambergerMenu, More2, SearchNormal1} from 'iconsax-react-native';

// create a component
const Header = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 35,
        }}>
        <Text
          style={{fontSize: 32, color: AppColors.BLACK, fontWeight: 'bold'}}>
          {MYNOTES}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
        }}>
        <View style={{padding: 5, flex: 1, justifyContent: 'center'}}>
          <HambergerMenu size="32" color={AppColors.BLACK} />
        </View>
        <View
          style={{
            padding: 5,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <SearchNormal1
            size="24"
            color={AppColors.BLACK}
            style={{marginRight: 20}}
          />
          <More2 size="32" color={AppColors.BLACK} />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    minHeight: screenHeight * 0.2,
    padding: 10,
  },
});

//make this component available to the app
export default Header;
