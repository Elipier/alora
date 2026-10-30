import { StyleSheet, Text, View } from "react-native";

type CardOutlineProps = {
  target_text: string;
  cp_name: string;
  source_text: string;
};

export default function CardOutline({
  target_text,
  cp_name,
  source_text,
}: CardOutlineProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.category}>{cp_name}</Text>
      <View style={styles.targetContainer}>
        <Text style={styles.target}>{target_text}</Text>
      </View>
      <Text style={styles.source}>{source_text}</Text>
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
    alignItems: "stretch",
    alignSelf: "center",
  },
  category: {
    fontFamily: "System",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.4,
    textAlign: "left",
    color: "#667085",
  },
  targetContainer: {
    flex: 1,
    justifyContent: "center",
  },
  target: {
    fontFamily: "System",
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 36,
    textAlign: "center",
    color: "#000",
  },
  source: {
    fontFamily: "System",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "center",
    color: "#667085",
  },
});
