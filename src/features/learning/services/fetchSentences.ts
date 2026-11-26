import { supabase } from "../../../services/supabase/supabase";
import type { Database } from "../../../services/supabase/database.types";
import type { AppError, AppResult } from "../../../services/result";

export type ReviewSessionFormulation =
  Database["public"]["Functions"]["get_review_session"]["Returns"][number];

export type FetchReviewSessionParams = {
  limit: number;
  sourceLocaleId: number;
  targetLocaleId: number;
  packId?: number;
};

export type FetchReviewSessionResult = AppResult<ReviewSessionFormulation[]>;

export default async function fetchSentences(
  params: FetchReviewSessionParams,
): Promise<FetchReviewSessionResult> {
  const { data, error } = await supabase.rpc("get_review_session", {
    p_limit: params.limit,
    p_pack_id: params.packId,
    p_source_locale_id: params.sourceLocaleId,
    p_target_locale_id: params.targetLocaleId,
  });

  // TODO - ajouter try/catch
  if (error) {
    console.error("Error Supabase fetchSentences:", error);

    let message: AppError["message"] = "Impossible de récupérer les phrases.";
    let kind: AppError["kind"] = "blocking";
    let code: AppError["code"] = "unexpected";

    switch (error.code) {
      case "42501":
        code = "permission";
        message = "Vous n'êtes pas autorisé à récupérer ces phrases.";
        kind = "blocking";
        break;
      case "57014":
        code = "network";
        message = "La récupération des phrases a expiré.";
        kind = "recoverable";
        break;
      default:
        // Garde le message générique pour les erreurs non reconnues.
        break;
    }

    const appError: AppError = {
      code,
      message,
      kind,
      log: String(error),
    };

    return {
      ok: false,
      error: appError,
    };
  }
  return { ok: true, data: data ?? [] };
}
