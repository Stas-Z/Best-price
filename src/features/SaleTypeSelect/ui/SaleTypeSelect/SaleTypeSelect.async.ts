import { FC, lazy } from 'react'

import { SaleTypeSelectProps } from './SaleTypeSelect'

export const SaleTypeSelectAsync = lazy<FC<SaleTypeSelectProps>>(
    () => import('./SaleTypeSelect'),
)
