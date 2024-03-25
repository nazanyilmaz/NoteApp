//import liraries
import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, SafeAreaView, Alert} from 'react-native';
import Header from '../../components/router/header';
import {ADDNOTE} from '../../utils/routes';
import FloatActionButton from '../../ui/floatActionButton';
import {screenStyle} from '../../style/screenStyle';
import NoteCard from '../../components/myNotes/noteCard';
import MyContext from '../../components/context';

// create a component
const MyNotes = ({navigation}) => {
  const {notes} = useContext(MyContext);

  // const [notes, setNotes] = useState([{
  //   id: 1,
  //   title: 'MVC Patern',
  //   description: 'Bu birinci notun açıklama yazısıdır.',
  //   date: '12:25 pm',
  // },
  // {
  //   id: 2,
  //   title: 'Native Stack Navigator',
  //   description: 'Bu ikinci notun açıklama yazısıdır.',
  //   date: '14:25 pm',
  // },
  // {
  //   id: 3,
  //   title: 'Bottom Tabs',
  //   description: 'Bu üçüncü notun açıklama yazısıdır.',
  //   date: '16:00 pm',
  // },
  // {
  //   id: 4,
  //   title: 'Native Getir Clone',
  //   description: 'Bu dördüncü notun açıklama yazısıdır.',
  //   date: '19:45 pm',
  // }])

  // const addNote = (item)=>{
  //   if(item){
  //     setNotes([...notes, item])
  //   }
  // }

  // const deleteNote = (id)=>{
  //   if(id){
  //     const updatedItems = notes.filter((item)=> item.id !== id.id)
  //     setNotes(updatedItems)
  //   } else {
  //     Alert.alert("Not Bulunamadı :/")
  //   }
  // }

  // const updateNote = (id, item)=>{
  //   const updatedItems = notes.map((note)=> note.id === id ? {...note, title: item.title} : note)
  //   setNotes(updatedItems)
  // }

  /*
    useEffect(()=>{
    setTimeout(() => {
      setNotes([...notes, note3])
    }, 2000);
  }, [])
  */

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <FlatList
          data={notes}
          renderItem={({item}) => (
            <NoteCard item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
        <FloatActionButton
          onPress={() => navigation.navigate(ADDNOTE, {type: 'add'})}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
