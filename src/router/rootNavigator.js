import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNOTE, MYNOTES, NOTEDETAIL} from '../utils/routes';
import MyNotes from '../screens/myNotes';

import AddNote from '../screens/addNote';
import {AppColors} from '../theme/colors';
import HeaderRight from '../ui/headerRight';
import NoteDetail from '../screens/noteDetail';

const Stack = createNativeStackNavigator();

function RootNavigatoor() {
  return (
    <Stack.Navigator screenOptions={{headerTintColor: AppColors.BLACK}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={MYNOTES}
        component={MyNotes}
      />
      <Stack.Screen
        options={{
          headerRight: props => <HeaderRight />,
        }}
        name={ADDNOTE}
        component={AddNote}
      />
      <Stack.Screen name={NOTEDETAIL} component={NoteDetail} />
    </Stack.Navigator>
  );
}
export default RootNavigatoor;
