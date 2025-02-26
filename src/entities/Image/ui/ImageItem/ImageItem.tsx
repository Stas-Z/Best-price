import { memo, useCallback } from 'react'

import Close from '@/shared/assets/icons/close.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppImage } from '@/shared/ui/AppImage'
import { Icon } from '@/shared/ui/Icon'

import cls from './ImageItem.module.scss'
interface ImageItemProps {
    className?: string
    onClickDelete?: (image: File) => void
    image: File
}

export const ImageItem = memo((props: ImageItemProps) => {
    const { className, image, onClickDelete } = props

    const onClickDeleteItem = useCallback(() => {
        if (onClickDelete && image) {
            onClickDelete(image)
        }
    }, [image, onClickDelete])

    const src = URL.createObjectURL(image)
    return (
        <div className={classNames(cls.imageItem, {}, [className])}>
            <AppImage src={src} alt={`upload-${image}`} className={cls.img} />
            <Icon
                Svg={Close}
                clickable
                onClick={onClickDeleteItem}
                width={24}
                height={24}
                className={cls.close}
            />
        </div>
    )
})
ImageItem.displayName = 'ImageItem'
