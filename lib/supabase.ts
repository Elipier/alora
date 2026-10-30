import "expo-sqlite/localStorage/install";
import "react-native-url-polyfill/auto";

import { createSupabaseClient } from "./createSupabaseClient";

export const supabase = createSupabaseClient(localStorage);
