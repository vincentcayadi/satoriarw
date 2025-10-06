import { z } from "zod";

// Environment variable schema
export const envSchema = z.object({
  SUPABASE_URL: z.string().url("Invalid Supabase URL"),
  SUPABASE_ANON_KEY: z.string().min(1, "Supabase anon key is required"),
});

// Image folder types
export const imageFolderSchema = z.enum([
  "street",
  "wildlife",
  "automotive",
  "banner",
  "thumbnails",
  "carousel"
]);

export const galleryFolderSchema = z.enum([
  "street",
  "wildlife",
  "automotive"
]);

// Database schemas
export const imageSchema = z.object({
  id: z.number().int().positive(),
  folder: imageFolderSchema,
  name: z.string().min(1, "Image name is required"),
  url: z.string().url("Invalid image URL"),
  alt_text: z.string().min(1, "Alt text is required"),
  href: z.string().url().optional(),
  created_at: z.string().datetime(),
});

export const galleryImageSchema = z.object({
  id: z.number().int().positive(),
  folder: galleryFolderSchema,
  url: z.string().url("Invalid image URL"),
  alt: z.string().min(1, "Alt text is required"),
  created_at: z.string().datetime(),
});

// Array schemas for API responses
export const imagesArraySchema = z.array(imageSchema);
export const galleryImagesArraySchema = z.array(galleryImageSchema);

// Form validation schemas
export const uploadImageSchema = z.object({
  folder: imageFolderSchema,
  name: z.string().min(1, "Image name is required"),
  alt_text: z.string().min(1, "Alt text is required"),
  file: z.instanceof(File).refine(
    (file) => file.size <= 10 * 1024 * 1024, // 10MB
    "File size must be less than 10MB"
  ).refine(
    (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
    "File must be JPEG, PNG, or WebP"
  ),
});

// Type exports for convenience
export type ImageFolder = z.infer<typeof imageFolderSchema>;
export type GalleryFolder = z.infer<typeof galleryFolderSchema>;
export type ImageData = z.infer<typeof imageSchema>;
export type GalleryImageData = z.infer<typeof galleryImageSchema>;
export type UploadImageData = z.infer<typeof uploadImageSchema>;

// Validation helper functions
export function validateEnv(env: unknown) {
  return envSchema.parse(env);
}

export function validateImage(data: unknown) {
  return imageSchema.parse(data);
}

export function validateGalleryImage(data: unknown) {
  return galleryImageSchema.parse(data);
}

export function validateImagesArray(data: unknown) {
  return imagesArraySchema.parse(data);
}

export function validateGalleryImagesArray(data: unknown) {
  return galleryImagesArraySchema.parse(data);
}