import PhraseSwiper from "../components/swiper";
import fetchSentences from "../../services/fetchSentences";

import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Formulation = {
  content_pack_name: string;
  source_formulation_id: number;
  source_text: string;
  target_formulation_id: number;
  target_text: string;
};

type Sentence = {
  cp_name: string;
  source_id: number;
  source_text: string;
  target_id: number;
  target_text: string;
};

const formulationToSentence = (formulation: Formulation): Sentence => {
  return {
    cp_name: formulation.content_pack_name,
    source_id: formulation.source_formulation_id,
    source_text: formulation.source_text,
    target_id: formulation.target_formulation_id,
    target_text: formulation.target_text,
  };
};

export default function GetSentences() {
  const [phrases, setPhrases] = useState<Formulation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sentenceArray = phrases.map(formulationToSentence);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Alora mes phrases</Text>
      <Button
        title="Récupérer mes phrase"
        onPress={() => fetchSentences(setLoading, setError, setPhrases)}
      />
      {loading && <ActivityIndicator style={styles.message} />}
      {error && <Text style={styles.error}>Erreur :{error}</Text>}
      {phrases && <PhraseSwiper sentences={sentenceArray} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 70,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  message: {
    marginTop: 16,
  },
  error: {
    color: "red",
  },
  card: {
    padding: 16,
    backgroundColor: "#eeeeee",
    borderRadius: 8,
  },
});
