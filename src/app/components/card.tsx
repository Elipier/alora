import { StyleSheet, Text, View } from "react-native";

export default function CardOutline() {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Place sentence here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderColor: "#0a57e7",
    borderRadius: 12,
    borderWidth: 2,
    padding: 16,
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000",
    fontFamily: "System",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: 0.2,
    textAlign: "center",
  },
});
