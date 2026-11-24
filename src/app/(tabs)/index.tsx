import PhraseSwiper from "../../features/learning/components/swiper";
import fetchSentences, {
  type ReviewSessionFormulation,
  type FetchReviewSessionParams,
} from "../../features/learning/services/fetchSentences";

import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

// CONSTANTES (TODO - Remplacer par valeurs dynamique users)

const userSentenceParams: FetchReviewSessionParams = {
  limit: 20,
  sourceLocaleId: 2,
  targetLocaleId: 3,
};

type Sentence = {
  cp_name: string;
  source_id: number;
  source_text: string;
  target_id: number;
  target_text: string;
};

const formulationToSentence = (
  formulation: ReviewSessionFormulation,
): Sentence => {
  return {
    cp_name: formulation.content_pack_name,
    source_id: formulation.source_formulation_id,
    source_text: formulation.source_text,
    target_id: formulation.target_formulation_id,
    target_text: formulation.target_text,
  };
};

export default function GetSentences(): React.JSX.Element {
  const [phrases, setPhrases] = useState<ReviewSessionFormulation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sentenceArray = phrases.map(formulationToSentence);

  async function handleFetchSentence(
    params: FetchReviewSessionParams,
  ): Promise<void> {
    setLoading(true);
    setError(null);
    const result = await fetchSentences(params);

    setLoading(false);
    if (result.ok) setPhrases(result.data);
    else setError(result.error);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Alora mes phrases</Text>
      <Button
        title="Récupérer mes phrase"
        onPress={() => handleFetchSentence(userSentenceParams)}
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
