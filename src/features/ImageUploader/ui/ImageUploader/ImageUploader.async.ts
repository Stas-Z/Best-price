import { FC, lazy } from 'react'

import { ImageUploaderProps } from './ImageUploader'

export const ImageUploaderAsync = lazy<FC<ImageUploaderProps>>(
    () => import('./ImageUploader'),
)
