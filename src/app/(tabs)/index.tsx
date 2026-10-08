import { StyleSheet, View } from "react-native";
import CardOutline from "../components/card";

export default function Index() {
  return (
    <View style={styles.container}>
      <CardOutline></CardOutline>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
