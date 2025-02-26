import { FC, lazy } from 'react'

import { ConditionTypeSelectProps } from './ConditionTypeSelect'

export const ConditionTypeSelectAsync = lazy<FC<ConditionTypeSelectProps>>(
    () => import('./ConditionTypeSelect'),
)
