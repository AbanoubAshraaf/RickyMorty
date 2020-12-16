import { StyleSheet } from 'react-native';
import { colors } from '../../../AppStyles';

const styles = StyleSheet.create({
  container: {
    paddingTop: '2.6%',
    backgroundColor: colors.mainThemeForegroundColor,
    minHeight: 44,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  title: {
    flex: 1,
    color: colors.mainThemeBackgroundColor,
    fontSize: 22,
    textAlignVertical: 'bottom',
    textAlign: 'left',
  },
});
export default styles;
