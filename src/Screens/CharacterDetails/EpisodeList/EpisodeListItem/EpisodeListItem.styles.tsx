import { StyleSheet } from 'react-native';
import { colors } from '../../../../appStyles';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
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
