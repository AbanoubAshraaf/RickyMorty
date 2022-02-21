import { StyleSheet } from "react-native";
import { colors } from "../../../../appStyles";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.mainThemeBackgroundColor,
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
  },
  titleText: {
    color: colors.mainTextForegroundColor,
    fontSize: 15,
    alignSelf: "center",
    fontWeight: "bold",
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
