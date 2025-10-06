import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Collections
import { Users } from './collections/Users'
import { Categories } from './collections/Categories'
import { Photos } from './collections/Photos'
import { Media } from './collections/Media'

// Globals
import { SiteSettings } from './globals/SiteSettings'

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Categories,
    Photos,
    Media,
  ],
  globals: [
    SiteSettings,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret-key',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgresql://localhost:5432/satoriarw_cms',
    },
  }),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  cors: [
    'http://localhost:4321', // Astro dev server
    'https://satoriarw.vercel.app', // Production domain
  ],
})