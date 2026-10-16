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
  sentence_formulation_id: number;
  locale_id: number;
  text: string;
};

export default function App() {
  const [phrases, setPhrases] = useState<Formulation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  async function fetchPhrase() {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase
      .from("sentence_formulations")
      .select("sentence_formulation_id, locale_id, text")
      .eq("locale_id", 3)
      .limit(50);

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setPhrases(data ?? []);

    console.log(data);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Alora mes phrases</Text>
      <Button title="Récupérer mes phrase" onPress={fetchPhrase} />
      {loading && <ActivityIndicator style={styles.message} />}
      {error && <Text style={styles.error}>Erreur :{error}</Text>}

      {phrases &&
        phrases.map((phrase) => (
          <View key={phrase.sentence_formulation_id} style={styles.card}>
            <Text>{phrase.text}</Text>
          </View>
        ))}
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
