import type { CollectionConfig } from 'payload'

export const Photos: CollectionConfig = {
  slug: 'photos',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'featured', 'order'],
    listSearchableFields: ['title', 'alt_text', 'location'],
  },
  access: {
    read: () => true, // Public read access for Astro pages
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Photo Title',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo',
      required: true,
    },
    {
      name: 'alt_text',
      type: 'text',
      label: 'Alt Text',
      required: true,
      admin: {
        description: 'Descriptive text for accessibility and SEO',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      label: 'Category',
      required: true,
      admin: {
        description: 'Which gallery does this photo belong to?',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Photo',
      defaultValue: false,
      admin: {
        description: 'Display prominently in gallery',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
      admin: {
        description: 'Lower numbers appear first',
      },
    },
    {
      name: 'metadata',
      type: 'group',
      label: 'Photo Metadata',
      fields: [
        {
          name: 'camera',
          type: 'text',
          label: 'Camera',
          admin: {
            placeholder: 'e.g., Canon EOS R5',
          },
        },
        {
          name: 'lens',
          type: 'text',
          label: 'Lens',
          admin: {
            placeholder: 'e.g., RF 24-70mm f/2.8L',
          },
        },
        {
          name: 'settings',
          type: 'text',
          label: 'Camera Settings',
          admin: {
            placeholder: 'e.g., f/2.8, 1/125s, ISO 400',
          },
        },
        {
          name: 'location',
          type: 'text',
          label: 'Location',
          admin: {
            placeholder: 'e.g., Tokyo, Japan',
          },
        },
        {
          name: 'date_taken',
          type: 'date',
          label: 'Date Taken',
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'SEO Title',
          admin: {
            description: 'Override default title for search engines',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'SEO Description',
          admin: {
            description: 'Brief description for search engine results',
          },
        },
      ],
    },
  ],
}