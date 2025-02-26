export const saleType = {
    FOR_SELF: 'Покупал для себя',
    FOR_SALE: 'Покупал для перепродажи',
} as const

export type SaleTypes = ValueOf<typeof saleType>
