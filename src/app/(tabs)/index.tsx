import PhraseSwiper from "../../features/learning/components/swiper";
import fetchSentences, {
  type ReviewSessionFormulation,
  type FetchReviewSessionParams,
} from "../../features/learning/services/fetchSentences";
import type { AsyncState } from "../../services/result";

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
  const [state, setState] = useState<AsyncState<ReviewSessionFormulation[]>>({
    status: "idle",
  });

  const sentenceArray =
    state.status === "success" ? state.data.map(formulationToSentence) : [];

  async function handleFetchSentence(
    params: FetchReviewSessionParams,
  ): Promise<void> {
    setState({ status: "loading" });
    const result = await fetchSentences(params);
    if (result.ok) setState({ status: "success", data: result.data });
    else setState({ status: "error", error: result.error });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Alora mes phrases</Text>
      <Button
        title="Récupérer mes phrase"
        disabled={state.status === "loading"}
        onPress={() => handleFetchSentence(userSentenceParams)}
      />
      {state.status === "loading" && (
        <ActivityIndicator style={styles.message} />
      )}
      {state.status === "error" && (
        <>
          <Text style={styles.error}>{state.error.message}</Text>
          {state.error.kind === "recoverable" && (
            <Button
              title="Réessayer"
              onPress={() => handleFetchSentence(userSentenceParams)}
            />
          )}
        </>
      )}
      {state.status === "success" && state.data.length !== 0 && (
        <PhraseSwiper sentences={sentenceArray} />
      )}

      {state.status === "success" && state.data.length === 0 && (
        <Text style={styles.message}>
          Aucune phrases à réviser pour le moment
        </Text>
      )}
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
