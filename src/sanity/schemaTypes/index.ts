import { type SchemaTypeDefinition } from 'sanity'

import property from './property'
import testimonial from './testimonial'
import teamMember from './team-member'
import siteSettings from './site-settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [property, testimonial, teamMember, siteSettings],
}