import { StyleSheet, View } from "react-native";
import SpanishPhraseSwiper from "../components/swiper";

export default function Index() {
  return (
    <View style={styles.container}>
      <SpanishPhraseSwiper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
  },
});
