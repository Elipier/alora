import PhraseSwiper from "../components/swiper";

import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { supabase } from "../../../lib/supabase";

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

const p_limit = 20,
  p_source_locale_id = 2,
  p_target_locale_id = 3;

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
  const [error, setError] = useState<string | null>();

  async function fetchPhrase() {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.rpc("get_review_session", {
      p_limit,
      p_source_locale_id,
      p_target_locale_id,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setPhrases(data ?? []);

    console.log(data);
  }

  const sentenceArray = phrases.map(formulationToSentence);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Alora mes phrases</Text>
      <Button title="Récupérer mes phrase" onPress={fetchPhrase} />
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
