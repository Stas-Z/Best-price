import { FC, lazy } from 'react'

import { CommunicationSelectProps } from './CommunicationSelect'

export const CommunicationSelectAsync = lazy<FC<CommunicationSelectProps>>(
    () => import('./CommunicationSelect'),
)
