import { z } from 'zod'

export const saleTypeSchema = z.object({
    sale: z.enum(['Покупал для себя', 'Покупал для перепродажи'], {
        errorMap: () => ({ message: 'Выберите один из вариантов' }),
    }),
})

export type SelectSaleTypes = z.infer<typeof saleTypeSchema>
