import { FC, lazy } from 'react'

import { CitySelectProps } from './CitySelect'

export const CitySelectAsync = lazy<FC<CitySelectProps>>(
    () => import('./CitySelect'),
)
