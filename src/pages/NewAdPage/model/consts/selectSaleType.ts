export const conditionType = {
    NEW: 'new',
    OLD: 'old',
} as const

export type ConditionTypes = ValueOf<typeof conditionType>

export const saleType = {
    FOR_SELF: 'for_self',
    FOR_SALE: 'for_sale',
} as const

export type SaleTypes = ValueOf<typeof saleType>
