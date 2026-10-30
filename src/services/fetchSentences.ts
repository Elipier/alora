import { supabase } from "../../lib/supabase";

type Formulation = {
  content_pack_name: string;
  source_formulation_id: number;
  source_text: string;
  target_formulation_id: number;
  target_text: string;
};

const p_limit = 20,
  p_source_locale_id = 2,
  p_target_locale_id = 3;

export default async function fetchSentences(
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void,
  setPhrases: (phrases: Formulation[]) => void,
) {
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
