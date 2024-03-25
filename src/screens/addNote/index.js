//import liraries
import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import {screenStyle} from '../../style/screenStyle';
import Button from '../../ui/button';
import {AppColors} from '../../theme/colors';
import getRandomNumber from '../../utils/functions';
import MyContext from '../../components/context';
import {useNavigation} from '@react-navigation/native';

// create a component
const AddNote = ({route}) => {
  const {addNote, updateNote} = useContext(MyContext);
  const navigation = useNavigation();
  const {note} = route?.params;
  const {type} = route?.params;
  const [description, setDescription] = useState(note?.description);
  const [title, setTitle] = useState(note?.title);
  const [titleRequired, setTitleRequired] = useState(false);
  const [descriptinonRequired, setDescriptionRequired] = useState(false);

  const saveNote = () => {
    if (!title) setTitleRequired(true);
    if (!description) setDescriptionRequired(true);
    if (title && description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
      const form = {
        id: getRandomNumber(1, 100),
        title: title,
        description: description,
        date: new Date().toLocaleString(),
        read: false,
      };
      addNote(form); //notu listeye ekle
      navigation.goBack(); // ana sayfaya don
    }
  };
  const editNote = () => {
    if (!title) {
      setTitleRequired(true);
    }
    if (!description) {
      setDescriptionRequired(true);
    }
    if (title && description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
      const form = {
        id: note.id,
        title: title,
        description: description,
        date: '17:00',
        read: false,
      };
      // yeni notu ekle
      updateNote(note.id, form);
      // önceki sayfaya dön
      navigation.goBack();
    }
  };

  //console.log(route);

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View style={{flex: 1, marginVertical: 20}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 35,
              color: AppColors.LBLUE,
            }}>
            Title:
          </Text>
          <TextInput
            placeholder="Type the  New Title Here..."
            value={title}
            style={{
              borderColor: AppColors.LBLUE,
              backgroundColor: AppColors.WHITE,
              borderWidth: 1,
              borderRadius: 6,
              padding: 5,
              height: 50,
              shadowColor: AppColors.LBLUE,
              shadowOffset: {
                width: 0,
                height: 7,
              },

              shadowOpacity: 0.43,
              shadowRadius: 9.51,
            }}
            onChangeText={text => setTitle(text)}
          />
          {titleRequired && (
            <Text style={{color: 'red', fontSize: 10, marginVertical: 5}}>
              Please Fill in the Title Field!!!
            </Text>
          )}
        </View>
        <View style={{flex: 5}}>
          <Text
            style={{fontWeight: 'bold', fontSize: 20, color: AppColors.LBLUE}}>
            Description:
          </Text>
          <TextInput
            placeholder="Type the  Description Here..."
            value={description}
            style={{
              backgroundColor: AppColors.WHITE,
              borderWidth: 1,
              borderRadius: 6,
              borderColor: AppColors.LBLUE,
              padding: 5,
              height: 100,
              shadowColor: AppColors.BLUE,
              shadowOffset: {
                width: 0,
                height: 7,
              },

              shadowOpacity: 0.43,
              shadowRadius: 9.51,
            }}
            onChangeText={text => setDescription(text)}
          />
          {descriptinonRequired && (
            <Text style={{color: 'red', fontSize: 10, marginVertical: 5}}>
              Please Fill in the Description Field!!!
            </Text>
          )}
        </View>
        <View>
          <Button
            title={type == 'update' ? 'Update' : 'Save'}
            onPress={type === 'update' ? editNote : saveNote}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default AddNote;
