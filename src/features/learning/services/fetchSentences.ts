import { supabase } from "../../../services/supabase/supabase";
import type { Database } from "../../../services/supabase/database.types";

export type ReviewSessionFormulation =
  Database["public"]["Functions"]["get_review_session"]["Returns"][number];

export type FetchReviewSessionParams = {
  limit: number;
  sourceLocaleId: number;
  targetLocaleId: number;
  packId?: number;
};

export type FetchReviewSessionResult =
  | {
      ok: true;
      data: ReviewSessionFormulation[];
    }
  | { ok: false; error: string };

export default async function fetchSentences(
  params: FetchReviewSessionParams,
): Promise<FetchReviewSessionResult> {
  const { data, error } = await supabase.rpc("get_review_session", {
    p_limit: params.limit,
    p_pack_id: params.packId,
    p_source_locale_id: params.sourceLocaleId,
    p_target_locale_id: params.targetLocaleId,
  });

  if (error) {
    return { ok: false, error: error.message };
  }
  return { ok: true, data: data ?? [] };
}
