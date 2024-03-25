//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {
  TextBold,
  Text,
  TextUnderline,
  TextalignLeft,
  TextalignRight,
  TextalignCenter,
} from 'iconsax-react-native';

// create a component
const EditButtons = ({onChangeStyle}) => {
  const Buttons = [
    {
      id: 1,
      value: 'bold',
      icon: <TextBold size="25" color={AppColors.BLACK} />,
    },
    {
      id: 2,
      value: 'textUnderline',
      icon: <TextUnderline size="25" color={AppColors.BLACK} />,
    },
    {
      id: 3,
      value: 'italic',
      icon: <Text size="24" color={AppColors.BLACK} />,
    },
    {
      id: 4,
      value: 'center',
      icon: <TextalignCenter size="25" color={AppColors.BLACK} />,
    },
    {
      id: 5,
      value: 'left',
      icon: <TextalignLeft size="25" color={AppColors.BLACK} />,
    },
    {
      id: 6,
      value: 'right',
      icon: <TextalignRight size="25" color={AppColors.BLACK} />,
    },
  ];

  return (
    <View style={styles.container}>
      {Buttons.map((item, index) => (
        <TouchableOpacity
          onPress={() => onChangeStyle(item.value)}
          key={item.id}>
          {item.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    backgroundColor: AppColors.GRAY,
    flexDirection: 'row',
    padding: 5,
    paddingVertical: 10,
  },
});

//make this component available to the app
export default EditButtons;
