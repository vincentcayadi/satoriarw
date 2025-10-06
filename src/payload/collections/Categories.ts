import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'featured', 'order'],
  },
  access: {
    read: () => true, // Public read access for Astro pages
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Category Name',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL Slug',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly version (e.g., street, wildlife, automotive)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      admin: {
        description: 'Brief description of this photo category',
      },
    },
    {
      name: 'banner_image',
      type: 'upload',
      relationTo: 'media',
      label: 'Banner Image',
      admin: {
        description: 'Hero image for the category page',
      },
    },
    {
      name: 'thumbnail_image',
      type: 'upload',
      relationTo: 'media',
      label: 'Thumbnail Image',
      admin: {
        description: 'Thumbnail for gallery overview page',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Category',
      defaultValue: false,
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
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Meta Description',
        },
      ],
    },
  ],
}