// Static imports for Turbopack to resolve at build time
import Identity from './identity.mdx'

export const essays = {
  identity: Identity,
} as const

export type EssaySlug = keyof typeof essays
