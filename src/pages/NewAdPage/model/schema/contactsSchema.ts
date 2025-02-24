import { z } from 'zod'

export const contactsSchema = z.object({
    telephone: z
        .string()
        .min(1, 'Телефон не должен быть пустым')
        .regex(/^\d+$/, 'Телефон должен содержать только цифры, без пробелов'),
    communication: z.string(),
})

export type ContactsType = z.infer<typeof contactsSchema>
