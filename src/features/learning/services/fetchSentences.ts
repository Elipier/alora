import { supabase } from "../../../services/supabase/supabase";
import type { Database } from "../../../services/supabase/database.types";

export type ReviewSessionFormulation =
  Database["public"]["Functions"]["get_review_session"]["Returns"][number];

const p_limit = 20,
  p_source_locale_id = 2,
  p_target_locale_id = 3;

export default async function fetchSentences(
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void,
  setPhrases: (phrases: ReviewSessionFormulation[]) => void,
): Promise<void> {
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
