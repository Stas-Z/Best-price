import { contactsSchema } from './contactsSchema'
import { detailsSchema } from './detailsSchema'
import { parametersSchema } from './parametersSchema'
import { placeSchema } from './placeSchema'

export const adSchema = parametersSchema
    .merge(detailsSchema)
    .merge(placeSchema)
    .merge(contactsSchema)
