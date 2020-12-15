import { StyleSheet } from 'react-native';
import { colors } from '../../../../appStyles';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 3,
    backgroundColor: colors.mainThemeBackgroundColor,
    borderRadius: 10,
    marginVertical: 10,
  },
  titleText: {
    color: colors.mainTextForegroundColor,
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  keyText: {
    color: colors.mainTextColor,
    fontSize: 12,
  },
  valueText: {
    flex: 1,
    color: colors.grey6,
    fontSize: 10,
  },
});

export default styles;
