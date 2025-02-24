import { memo } from 'react'

import { ImageList } from '@/entities/Image'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

import cls from './ImageUploader.module.scss'

interface ImageUploaderProps {
    className?: string
    images: File[]
    onChange: (images: File[]) => void
}

export const ImageUploader = memo((props: ImageUploaderProps) => {
    const { className, images, onChange } = props

    const handleRemoveImage = (imageLoaded: File) => {
        const updatedImages = images.filter((image) => image !== imageLoaded)
        onChange(updatedImages)
    }

    return (
        <VStack
            className={classNames(cls.imageUploader, {}, [className])}
            gap="16"
        >
            <ImageList
                images={images}
                onClickDelete={handleRemoveImage}
                onChange={onChange}
            />

            <Text text={`${images.length} из 10`} size="s" variant="grey" />
        </VStack>
    )
})

ImageUploader.displayName = 'ImageUploader'
