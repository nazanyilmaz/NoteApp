//import liraries
import React, {useState} from 'react';
import MyContext from '.';
import {Alert} from 'react-native';

// create a component
const Provider = ({children}) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Firebase ',
      description: 'Firebase provides tools to grow your app and business.',
      date: '12/18/2023, 4:32:09 PM',
    },
    {
      id: 2,
      title: 'Software Engineer',
      description: 'Software engineers design and develop computer games.',
      date: '1/10/2024, 5:32:09 AM',
    },
    {
      id: 3,
      title: 'Content Writer',
      description:
        'A content writer is a professional who creates and manages.',
      date: '2/8/2024, 9:12:09 PM',
    },
    {
      id: 4,
      title: 'Data Engineer',
      description: 'Data engineers work in a variety of settings to ',
      date: '7/9/2023, 4:32:09 PM',
    },
    {
      id: 5,
      title: 'React Native Developer',
      description: 'React Native developers are software developers ',
      date: '1/10/2024, 5:32:09 AM',
    },
    {
      id: 6,
      title: 'Backend Engineer',
      description: 'A backend engineer is responsible for designing, building',
      date: '1/10/2024, 5:32:09 AM',
    },
  ]);
  const addNote = item => {
    if (item) setNotes([...notes, item]);
    Alert.alert('Note Added!!');
  };
  const deleteNote = id => {
    if (id) {
      const updateItems = notes.filter(item => item.id !== id.id);
      setNotes(updateItems);
      Alert.alert('Note Deleted!!!');
    } else {
      Alert.alert('this note is not find');
    }
  };
  const updateNote = (id, item) => {
    const updateItems = notes.map(note =>
      note.id === id
        ? {
            ...note,
            title: item.title,
            description: item.description,
            read: true,
            date: '20:30',
          }
        : note,
    );
    setNotes(updateItems);
  };

  return (
    <MyContext.Provider
      value={{notes, setNotes, addNote, deleteNote, updateNote}}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
