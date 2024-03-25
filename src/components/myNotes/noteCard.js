//import liraries
import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {screenWidh} from '../../utils/constans';
import {Edit2, Trash} from 'iconsax-react-native';
import {NoteCardStyle} from '../../style/myNotesStyle';
import {ADDNOTE, NOTEDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';
import MyContext from '../context';

// create a component
const NoteCard = ({item}) => {
  const navigation = useNavigation();
  const {deleteNote} = useContext(MyContext);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NOTEDETAIL, {note: item})}
      style={NoteCardStyle.container}>
      <View style={NoteCardStyle.bubleContainer}>
        <View
          style={{
            width: screenWidh * 0.03,
            height: screenWidh * 0.03,
            backgroundColor: AppColors.LBLUE,
            borderRadius: 100,
          }}></View>
      </View>
      <View style={{flex: 8}}>
        <Text
          style={{fontSize: 18, fontWeight: 'bold', color: AppColors.BLACK}}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: AppColors.GRAY,
            marginVertical: 5,
          }}>
          {item.description}
        </Text>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: AppColors.GRAY}}>
          {item.date}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ADDNOTE, {note: item, type: 'update'})
        }
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Edit2 size="24" color={AppColors.LBLUE} variant="Bold" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => deleteNote(item)}
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Trash size="24" color={AppColors.RED} variant="Bold" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NoteCard;
