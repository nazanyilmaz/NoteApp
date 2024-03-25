//import liraries
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import {screenStyle} from '../../style/screenStyle';
import EditButtons from '../../components/addNote/editButtons';
import {AppColors} from '../../theme/colors';
import Button from '../../ui/button';
import MyContext from '../../components/context';

// create a component
const NoteDetail = ({route}) => {
  const {updateNote} = useContext(MyContext);
  const [selectStyle, setSelectStyle] = useState(styles.normal);
  const {note} = route?.params;
  const ChangeStyleText = style => {
    switch (style) {
      case 'bold':
        setSelectStyle(styles.bold);
        break;
      case 'textUnderline':
        setSelectStyle(styles.textUnderline);
        break;
      case 'italic':
        setSelectStyle(styles.italic);
        break;
      case 'center':
        setSelectStyle(styles.center);
        break;
      case 'left':
        setSelectStyle(styles.left);
        break;
      case 'right':
        setSelectStyle(styles.right);
        break;
    }
  };

  useEffect(() => {
    updateNote(note.id, note);
    return () => {
      updateNote(note.id, note);
    };
  }, []);

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons onChangeStyle={value => ChangeStyleText(value)} />
        </View>
        <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
          <View style={{flex: 1}}>
            <Text
              style={[
                {
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: AppColors.BLACK,
                  marginVertical: 5,
                },
                selectStyle,
              ]}>
              Title
            </Text>
            <Text
              style={[
                {
                  fontSize: 24,
                  fontWeight: '500',
                  color: AppColors.BLUE,
                  marginVertical: 5,
                },
                selectStyle,
              ]}>
              {note.title}
            </Text>
            <Text
              style={[
                {
                  fontSize: 18,
                  fontWeight: '400',
                  color: AppColors.GRAY,
                  marginVertical: 3,
                },
                selectStyle,
              ]}>
              {note.description}
            </Text>
          </View>
          <View>
            <Button title="Save Changes" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  normal: {},
});

export default NoteDetail;
