export const conditionType = {
    NEW: 'new',
    OLD: 'old',
} as const

export type ConditionTypes = ValueOf<typeof conditionType>
