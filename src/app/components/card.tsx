import { StyleSheet, Text, View } from "react-native";

type CardOutlineProps = {
  phrase: string;
};

export default function CardOutline({ phrase }: CardOutlineProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{phrase}</Text>
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
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
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
