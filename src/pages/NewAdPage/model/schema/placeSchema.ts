import { z } from 'zod'

export const placeSchema = z.object({
    city: z.string().min(1, 'Выберите город'), // Город не должен быть пустым
})

export type PlaceTypes = z.infer<typeof placeSchema>
