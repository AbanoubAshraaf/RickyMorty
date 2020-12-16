import { StyleSheet } from 'react-native';
import { colors } from '../../AppStyles';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginTop: 5,
    textAlign: 'center',
  },
  characterImage: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  infoText: {
    fontSize: 15,
    marginTop: 5,
    color: colors.grey6,
  },
});

export default styles;
