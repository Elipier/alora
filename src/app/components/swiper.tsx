import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import CardOutline from "./card";

type Sentence = {
  id: number;
  text: string;
};

type SentenceListProps = {
  sentences: Sentence[];
};

export default function PhraseSwiper({ sentences }: SentenceListProps) {
  const [swipedCount, setSwipedCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frases en español</Text>
      <Text style={styles.progress}>
        {sentences.length === 0
          ? "0 / 0"
          : isComplete
          ? `${sentences.length} / ${sentences.length}`
          : `${swipedCount + 1} / ${sentences.length} · Desliza para continuar`}
      </Text>
      {isComplete ? (
        <Text style={styles.completeMessage}>
          ¡Muy bien! Has repasado todas las frases.
        </Text>
      ) : sentences.length === 0 ? (
        <Text style={styles.completeMessage}>
          No hay frases para mostrar.
        </Text>
      ) : (
        <Swiper<Sentence>
          cards={sentences}
          renderCard={(sentence) => (
            <View style={styles.cardSlot}>
              <CardOutline phrase={sentence.text} />
            </View>
          )}
          keyExtractor={(sentence) => String(sentence.id)}
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
