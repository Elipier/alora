import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import CardOutline from "./card";

type SpanishPhrase = {
  id: string;
  text: string;
};

const spanishPhrases: SpanishPhrase[] = [
  { id: "greeting", text: "¡Buenos días!" },
  { id: "name", text: "¿Cómo te llamas?" },
  { id: "introduction", text: "Me llamo Ana." },
  { id: "coffee", text: "Quisiera un café, por favor." },
  { id: "station", text: "¿Dónde está la estación?" },
  { id: "price", text: "¿Cuánto cuesta?" },
  { id: "thanks", text: "Muchas gracias." },
  { id: "goodbye", text: "¡Hasta luego!" },
];

export default function SpanishPhraseSwiper() {
  const [swipedCount, setSwipedCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frases en español</Text>
      <Text style={styles.progress}>
        {isComplete
          ? `${spanishPhrases.length} / ${spanishPhrases.length}`
          : `${swipedCount + 1} / ${spanishPhrases.length} · Desliza para continuar`}
      </Text>
      {isComplete ? (
        <Text style={styles.completeMessage}>
          ¡Muy bien! Has repasado todas las frases.
        </Text>
      ) : (
        <Swiper<SpanishPhrase>
          cards={spanishPhrases}
          renderCard={(phrase) => (
            <View style={styles.cardSlot}>
              <CardOutline phrase={phrase.text} />
            </View>
          )}
          keyExtractor={(phrase) => phrase.id}
          onSwiped={(cardIndex) => setSwipedCount(cardIndex + 1)}
          onSwipedAll={() => setIsComplete(true)}
          stackSize={2}
          cardHorizontalMargin={20}
          cardVerticalMargin={36}
          marginTop={36}
          marginBottom={170}
          backgroundColor="transparent"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    paddingTop: 16,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  progress: {
    color: "#c6c8cb",
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
  },
  cardSlot: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  completeMessage: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 24,
    marginTop: 48,
    textAlign: "center",
  },
});
