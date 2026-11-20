export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      concept_progress: {
        Row: {
          concept_progress_id: number
          locale_id: number
          mastery_score: number
          sentence_concept_id: number
          updated_at: string
          user_id: string
        }
        Insert: {
          concept_progress_id?: never
          locale_id: number
          mastery_score?: number
          sentence_concept_id: number
          updated_at?: string
          user_id: string
        }
        Update: {
          concept_progress_id?: never
          locale_id?: number
          mastery_score?: number
          sentence_concept_id?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_concept_progress_concept"
            columns: ["sentence_concept_id"]
            isOneToOne: false
            referencedRelation: "sentence_concepts"
            referencedColumns: ["sentence_concept_id"]
          },
          {
            foreignKeyName: "fk_concept_progress_locale"
            columns: ["locale_id"]
            isOneToOne: false
            referencedRelation: "locales"
            referencedColumns: ["locale_id"]
          },
          {
            foreignKeyName: "fk_concept_progress_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "fk_concept_progress_user_locale"
            columns: ["user_id", "locale_id"]
            isOneToOne: false
            referencedRelation: "user_languages"
            referencedColumns: ["user_id", "locale_id"]
          },
        ]
      }
      content_packs: {
        Row: {
          content_pack_id: number
          created_at: string
          created_by_user_id: string | null
          description: string | null
          name: string
          topic_id: number | null
        }
        Insert: {
          content_pack_id?: never
          created_at?: string
          created_by_user_id?: string | null
          description?: string | null
          name: string
          topic_id?: number | null
        }
        Update: {
          content_pack_id?: never
          created_at?: string
          created_by_user_id?: string | null
          description?: string | null
          name?: string
          topic_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_content_packs_created_by_user"
            columns: ["created_by_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "fk_content_packs_topic"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["topic_id"]
          },
        ]
      }
      languages: {
        Row: {
          code: string
          language_id: number
          name: string
        }
        Insert: {
          code: string
          language_id?: never
          name: string
        }
        Update: {
          code?: string
          language_id?: never
          name?: string
        }
        Relationships: []
      }
      locales: {
        Row: {
          code: string
          language_id: number
          locale_id: number
          name: string
        }
        Insert: {
          code: string
          language_id: number
          locale_id?: never
          name: string
        }
        Update: {
          code?: string
          language_id?: number
          locale_id?: never
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_locales_language"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["language_id"]
          },
        ]
      }
      pack_concepts: {
        Row: {
          content_pack_id: number
          pack_concept_id: number
          position: number
          sentence_concept_id: number
        }
        Insert: {
          content_pack_id: number
          pack_concept_id?: never
          position: number
          sentence_concept_id: number
        }
        Update: {
          content_pack_id?: number
          pack_concept_id?: never
          position?: number
          sentence_concept_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_pack_concepts_concept"
            columns: ["sentence_concept_id"]
            isOneToOne: false
            referencedRelation: "sentence_concepts"
            referencedColumns: ["sentence_concept_id"]
          },
          {
            foreignKeyName: "fk_pack_concepts_pack"
            columns: ["content_pack_id"]
            isOneToOne: false
            referencedRelation: "content_packs"
            referencedColumns: ["content_pack_id"]
          },
        ]
      }
      practice_attempts: {
        Row: {
          created_at: string
          exercise_type: string
          practice_attempt_id: number
          result: string
          sentence_concept_id: number
          sentence_formulation_id: number | null
          session_id: number
        }
        Insert: {
          created_at?: string
          exercise_type: string
          practice_attempt_id?: never
          result: string
          sentence_concept_id: number
          sentence_formulation_id?: number | null
          session_id: number
        }
        Update: {
          created_at?: string
          exercise_type?: string
          practice_attempt_id?: never
          result?: string
          sentence_concept_id?: number
          sentence_formulation_id?: number | null
          session_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_practice_attempts_concept"
            columns: ["sentence_concept_id"]
            isOneToOne: false
            referencedRelation: "sentence_concepts"
            referencedColumns: ["sentence_concept_id"]
          },
          {
            foreignKeyName: "fk_practice_attempts_formulation"
            columns: ["sentence_formulation_id"]
            isOneToOne: false
            referencedRelation: "sentence_formulations"
            referencedColumns: ["sentence_formulation_id"]
          },
          {
            foreignKeyName: "fk_practice_attempts_session"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["session_id"]
          },
        ]
      }
      sentence_concepts: {
        Row: {
          created_at: string
          created_by_user_id: string | null
          description: string | null
          name: string
          sentence_concept_id: number
        }
        Insert: {
          created_at?: string
          created_by_user_id?: string | null
          description?: string | null
          name: string
          sentence_concept_id?: never
        }
        Update: {
          created_at?: string
          created_by_user_id?: string | null
          description?: string | null
          name?: string
          sentence_concept_id?: never
        }
        Relationships: [
          {
            foreignKeyName: "fk_sentence_concepts_created_by_user"
            columns: ["created_by_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      sentence_formulations: {
        Row: {
          created_at: string
          locale_id: number
          sentence_concept_id: number
          sentence_formulation_id: number
          text: string
        }
        Insert: {
          created_at?: string
          locale_id: number
          sentence_concept_id: number
          sentence_formulation_id?: never
          text: string
        }
        Update: {
          created_at?: string
          locale_id?: number
          sentence_concept_id?: number
          sentence_formulation_id?: never
          text?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_sentence_formulations_concept"
            columns: ["sentence_concept_id"]
            isOneToOne: false
            referencedRelation: "sentence_concepts"
            referencedColumns: ["sentence_concept_id"]
          },
          {
            foreignKeyName: "fk_sentence_formulations_locale"
            columns: ["locale_id"]
            isOneToOne: false
            referencedRelation: "locales"
            referencedColumns: ["locale_id"]
          },
        ]
      }
      sessions: {
        Row: {
          ended_at: string | null
          session_id: number
          started_at: string
          target_duration_minutes: number | null
          type: string
          user_id: string
        }
        Insert: {
          ended_at?: string | null
          session_id?: never
          started_at?: string
          target_duration_minutes?: number | null
          type: string
          user_id: string
        }
        Update: {
          ended_at?: string | null
          session_id?: never
          started_at?: string
          target_duration_minutes?: number | null
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_sessions_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      topics: {
        Row: {
          created_at: string
          created_by_user_id: string | null
          description: string | null
          name: string
          topic_id: number
        }
        Insert: {
          created_at?: string
          created_by_user_id?: string | null
          description?: string | null
          name: string
          topic_id?: never
        }
        Update: {
          created_at?: string
          created_by_user_id?: string | null
          description?: string | null
          name?: string
          topic_id?: never
        }
        Relationships: [
          {
            foreignKeyName: "fk_topics_created_by_user"
            columns: ["created_by_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      user_languages: {
        Row: {
          locale_id: number
          user_id: string
          user_language_id: number
        }
        Insert: {
          locale_id: number
          user_id: string
          user_language_id?: never
        }
        Update: {
          locale_id?: number
          user_id?: string
          user_language_id?: never
        }
        Relationships: [
          {
            foreignKeyName: "fk_user_languages_locale"
            columns: ["locale_id"]
            isOneToOne: false
            referencedRelation: "locales"
            referencedColumns: ["locale_id"]
          },
          {
            foreignKeyName: "fk_user_languages_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string
          source_locale_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          source_locale_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          source_locale_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_users_source_locale"
            columns: ["source_locale_id"]
            isOneToOne: false
            referencedRelation: "locales"
            referencedColumns: ["locale_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_review_session: {
        Args: {
          p_limit?: number
          p_pack_id?: number
          p_source_locale_id: number
          p_target_locale_id: number
        }
        Returns: {
          concept_name: string
          content_pack_id: number
          content_pack_name: string
          sentence_concept_id: number
          source_formulation_id: number
          source_text: string
          target_formulation_id: number
          target_text: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
