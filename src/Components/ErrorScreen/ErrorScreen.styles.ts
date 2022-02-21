import { StyleSheet } from "react-native";
import { colors } from "../../appStyles";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  errorText: {
    fontSize: 20,
    color: colors.grey6,
  },
});

export default styles;
