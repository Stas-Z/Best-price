import { z } from 'zod'

export const detailsSchema = z.object({
    description: z.string().min(1, 'Описание объявления не должно быть пустым'),
    price: z
        .string()
        .min(1, 'Цена не должна быть пустой')
        .regex(/^\d+$/, 'Цена должна содержать только цифры'),
    images: z
        .array(z.instanceof(File))
        .min(1, 'Прикрепите хотя бы одно фото')
        .max(10),
    video: z
        .string()
        .optional()
        .refine((value) => !value || /^https?:\/\/.*[/.].*$/.test(value), {
            message: 'Введите корректную ссылку на видео',
        }),
})

export type DetailsType = z.infer<typeof detailsSchema>
