import { StyleSheet } from "react-native";
import { colors } from "../../appStyles";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    marginTop: 5,
    textAlign: "center",
    marginBottom: 10,
  },
  characterImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  infoText: {
    fontSize: 15,
    marginTop: 5,
    color: colors.grey6,
  },
});

export default styles;
