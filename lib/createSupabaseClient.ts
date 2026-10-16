import { createClient } from "@supabase/supabase-js";

type AuthStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">;

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabasePublishableKey =
  process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.EXPO_PUBLIC_SUPABASE_KEY!;

export function createSupabaseClient(storage?: AuthStorage) {
  return createClient(supabaseUrl, supabasePublishableKey, {
    auth: {
      storage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  });
}
