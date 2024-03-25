import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';

const NoteCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },

    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    flexDirection: 'row',
  },
  bubleContainer: {flex: 1, alignItems: 'center'},
});
export {NoteCardStyle};
