import { z } from 'zod'

export const conditionTypeSchema = z.object({
    condition: z.enum(['new', 'old'], {
        errorMap: () => ({ message: 'Выберите один из вариантов' }),
    }),
})

export type SelectConditionTypes = z.infer<typeof conditionTypeSchema>
