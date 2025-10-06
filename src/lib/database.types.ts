export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      images: {
        Row: {
          id: number
          folder: 'street' | 'wildlife' | 'automotive' | 'banner' | 'thumbnails' | 'carousel'
          name: string
          url: string
          alt_text: string
          href?: string
          created_at: string
        }
        Insert: {
          id?: number
          folder: 'street' | 'wildlife' | 'automotive' | 'banner' | 'thumbnails' | 'carousel'
          name: string
          url: string
          alt_text: string
          href?: string
          created_at?: string
        }
        Update: {
          id?: number
          folder?: 'street' | 'wildlife' | 'automotive' | 'banner' | 'thumbnails' | 'carousel'
          name?: string
          url?: string
          alt_text?: string
          href?: string
          created_at?: string
        }
        Relationships: []
      }
      gallery_images: {
        Row: {
          id: number
          folder: 'street' | 'wildlife' | 'automotive'
          url: string
          alt: string
          created_at: string
        }
        Insert: {
          id?: number
          folder: 'street' | 'wildlife' | 'automotive'
          url: string
          alt: string
          created_at?: string
        }
        Update: {
          id?: number
          folder?: 'street' | 'wildlife' | 'automotive'
          url?: string
          alt?: string
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// Helper types for easier usage
export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"])
  ? (Database["public"]["Tables"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"])[TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"])
  ? (Database["public"]["Tables"])[PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"])[TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"])
  ? (Database["public"]["Tables"])[PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

// Convenient type aliases
export type Image = Tables<"images">
export type GalleryImage = Tables<"gallery_images">