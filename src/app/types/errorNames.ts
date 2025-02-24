import { z } from 'zod'

import { adSchema } from '@/pages/NewAdPage'

type AdType = z.infer<typeof adSchema>

export type ErrorName = keyof AdType
