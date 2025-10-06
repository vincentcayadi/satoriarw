import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true, // Public read access for Astro pages
  },
  fields: [
    {
      name: 'site_title',
      type: 'text',
      label: 'Site Title',
      required: true,
      defaultValue: 'satori.arw',
    },
    {
      name: 'site_description',
      type: 'textarea',
      label: 'Site Description',
      admin: {
        description: 'Used for SEO meta description',
      },
    },
    {
      name: 'homepage',
      type: 'group',
      label: 'Homepage Content',
      fields: [
        {
          name: 'hero_text',
          type: 'richText',
          label: 'Hero Text',
          admin: {
            description: 'Main text displayed on homepage',
          },
        },
        {
          name: 'profile_image',
          type: 'upload',
          relationTo: 'media',
          label: 'Profile Image',
        },
        {
          name: 'gallery_banner',
          type: 'upload',
          relationTo: 'media',
          label: 'Gallery Section Banner',
        },
      ],
    },
    {
      name: 'about',
      type: 'group',
      label: 'About Section',
      fields: [
        {
          name: 'content',
          type: 'richText',
          label: 'About Content',
        },
        {
          name: 'profile_image',
          type: 'upload',
          relationTo: 'media',
          label: 'About Page Image',
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Contact Information',
      fields: [
        {
          name: 'email',
          type: 'email',
          label: 'Email Address',
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram Handle',
          admin: {
            placeholder: '@username',
          },
        },
        {
          name: 'instagram_url',
          type: 'text',
          label: 'Instagram URL',
          admin: {
            placeholder: 'https://instagram.com/username',
          },
        },
        {
          name: 'location',
          type: 'text',
          label: 'Location',
          admin: {
            placeholder: 'City, Country',
          },
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'og_image',
          type: 'upload',
          relationTo: 'media',
          label: 'Open Graph Image',
          admin: {
            description: 'Default image for social media sharing',
          },
        },
        {
          name: 'twitter_handle',
          type: 'text',
          label: 'Twitter Handle',
          admin: {
            placeholder: '@username',
          },
        },
      ],
    },
  ],
}