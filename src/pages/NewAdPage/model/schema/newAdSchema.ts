import { conditionTypeSchema } from '@/features/ConditionTypeSelect'
import { saleTypeSchema } from '@/features/SaleTypeSelect'

import { contactsSchema } from './contactsSchema'
import { detailsSchema } from './detailsSchema'
import { parametersSchema } from './parametersSchema'
import { placeSchema } from './placeSchema'

export const adSchema = parametersSchema
    .merge(saleTypeSchema)
    .merge(conditionTypeSchema)
    .merge(detailsSchema)
    .merge(placeSchema)
    .merge(contactsSchema)
