export const conditionType = {
    NEW: 'new',
    OLD: 'old',
} as const

export type conditionTypes = ValueOf<typeof conditionType>

export const selectSaleType = {
    FOR_SELF: 'for_self',
    FOR_SALE: 'for_sale',
} as const

export type selectSaleTypes = ValueOf<typeof selectSaleType>
