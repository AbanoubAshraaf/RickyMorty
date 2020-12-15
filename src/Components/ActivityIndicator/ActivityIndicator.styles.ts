import { StyleSheet } from 'react-native';
import { colors } from '../../appStyles';
const styles = StyleSheet.create({
  loaderContainer: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 5,
    backgroundColor: colors.mainThemeBackgroundColor,
    borderRadius: 30,
    alignSelf: 'center',
  },
});

export default styles;
