import { StyleSheet } from 'react-native';
import { colors } from '../../../appStyles';

const styles = StyleSheet.create({
  searchableContainer: (animatedValue: any) => {
    return {
      transform: [
        {
          translateY: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-20, 0],
          }),
        },
      ],
      borderWidth: 0,
      borderBottomLeftRadius: 35,
      borderBottomRightRadius: 35,
      backgroundColor: '#4657ae',
      marginHorizontal: 15,
      marginTop: 5,
      marginBottom: 10,
      borderRadius: 25,
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 10,
    };
  },

  textInput: {
    flex: 1,
    fontSize: 10,
    letterSpacing: 0,
    color: colors.mainThemeBackgroundColor,
    marginHorizontal: 10,
    textAlign: 'left',
    height:40
  },
});
export default styles;
