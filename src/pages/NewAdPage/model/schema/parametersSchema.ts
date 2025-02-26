import { z } from 'zod'

export const parametersSchema = z.object({
    title: z
        .string()
        .min(1, 'Название объявления не должно быть пустым')
        .regex(
            /^(?!\d+$)/,
            'Название не должно содержать только цифры или артикулы',
        ),
})

export type ParametersType = z.infer<typeof parametersSchema>
