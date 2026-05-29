// Static imports for Turbopack to resolve at build time
import Identity from './identity.mdx'
import Wealth from './wealth.mdx'

export const essays = {
  identity: Identity,
  wealth: Wealth,
} as const

export type EssaySlug = keyof typeof essays
