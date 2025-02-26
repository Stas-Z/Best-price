import { memo } from 'react'

import Placeholder from '@/shared/assets/icons/photoCamera.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon } from '@/shared/ui/Icon'
import { HStack } from '@/shared/ui/Stack'

import cls from './ImageList.module.scss'
import { ImageItem } from '../ImageItem/ImageItem'

interface ImageListProps {
    className?: string
    images: File[]
    onClickDelete?: (image: File) => void
    onChange: (images: File[]) => void
}

export const ImageList = memo((props: ImageListProps) => {
    const { className, images, onClickDelete, onChange } = props

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (!files) return

        const newImages = Array.from(files)

        onChange([...images, ...newImages].slice(0, 10))
    }

    return (
        <HStack
            gap="16"
            className={classNames('', {}, [className])}
            wrap="wrap"
        >
            {images.map((image, index) => (
                <ImageItem
                    image={image}
                    key={index}
                    onClickDelete={onClickDelete}
                />
            ))}

            {images.length < 10 && (
                <label className={cls.imagePlaceholder}>
                    <Icon
                        Svg={Placeholder}
                        width={28}
                        height={24}
                        className={cls.icon}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        style={{ display: 'none' }}
                        onChange={handleImageUpload}
                    />
                </label>
            )}
        </HStack>
    )
})
ImageList.displayName = 'ImageList'
