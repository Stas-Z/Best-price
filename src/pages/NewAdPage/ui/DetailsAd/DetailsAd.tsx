import { memo, useCallback } from 'react'

import { useFormContext } from 'react-hook-form'

import { ImageUploader } from '@/features/ImageUploader'
import { AdLayout } from '@/shared/layouts/AdLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { BlockAdRight } from '@/shared/ui/BlockAdRight'
import { Input } from '@/shared/ui/Input'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { Textarea } from '@/shared/ui/TextArea'

import cls from './DetailsAd.module.scss'
import { DetailsType } from '../../model/schema/detailsSchema'

interface DetailsAdProps {
    className?: string
}

export const DetailsAd = memo((props: DetailsAdProps) => {
    const { className } = props

    const {
        register,
        formState: { errors },
        clearErrors,
        watch,
        setValue,
    } = useFormContext<DetailsType>()

    const handleClearErrors = useCallback(() => {
        if (!Object.keys(errors).length) return
        clearErrors()
    }, [clearErrors, errors])

    const textAreaValue = watch('description')
    const priceValue = watch('price')
    const images = watch('images')
    const videoValue = watch('video')

    const handleImageChange = useCallback(
        (newImages: File[]) => {
            setValue('images', newImages)
        },
        [setValue],
    )

    return (
        <VStack
            max
            className={classNames(cls.detailsAd, {}, [className])}
            onClick={handleClearErrors}
        >
            <Text title="Подробности" size="l" className={cls.title} />
            <AdLayout
                left="Описание объявления"
                right={
                    <BlockAdRight
                        interaction={
                            <Textarea
                                value={textAreaValue}
                                className={cls.textArea}
                                placeholder="Описание"
                                required
                                {...register('description')}
                            />
                        }
                        errors={errors}
                        errorName="description"
                        description="Не указывайте в описании телефон и e-mail — для этого есть отдельные поля"
                    />
                }
            />
            <AdLayout
                left="Цена"
                right={
                    <BlockAdRight
                        interaction={
                            <Input
                                value={priceValue}
                                placeholder="₽"
                                required
                                {...register('price')}
                            />
                        }
                        errors={errors}
                        errorName="price"
                    />
                }
            />
            <AdLayout
                left="Фотографии"
                right={
                    <BlockAdRight
                        interaction={
                            <ImageUploader
                                images={images}
                                onChange={handleImageChange}
                            />
                        }
                        errors={errors}
                        errorName="images"
                    />
                }
            />
            <AdLayout
                left="Видео"
                right={
                    <BlockAdRight
                        interaction={
                            <Input
                                value={videoValue}
                                placeholder="Ссылка на видео"
                                {...register('video')}
                            />
                        }
                        errors={errors}
                        errorName="video"
                    />
                }
            />
        </VStack>
    )
})
DetailsAd.displayName = 'DetailsAd'
