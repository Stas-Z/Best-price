import { z } from 'zod'

export const parametersSchema = z.object({
    title: z
        .string()
        .min(1, 'Название объявления не должно быть пустым')
        .regex(
            /^(?!\d+$)/,
            'Название не должно содержать только цифры или артикулы',
        ),
    condition: z.enum(['new', 'old'], {
        errorMap: () => ({ message: 'Выберите один из вариантов' }),
    }),
    sale: z.enum(['for_self', 'for_sale'], {
        errorMap: () => ({ message: 'Выберите один из вариантов' }),
    }),
})

export type ParametersType = z.infer<typeof parametersSchema>
