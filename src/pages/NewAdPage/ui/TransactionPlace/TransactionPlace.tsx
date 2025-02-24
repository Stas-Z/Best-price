import { memo, useCallback } from 'react'

import { useFormContext } from 'react-hook-form'

import { CitySelect } from '@/entities/City'
import { AdLayout } from '@/shared/layouts/AdLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { BlockAdRight } from '@/shared/ui/BlockAdRight'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

import cls from './TransactionPlace.module.scss'
import { PlaceTypes } from '../../model/schema/placeSchema'

interface TransactionPlaceProps {
    className?: string
}

export const TransactionPlace = memo((props: TransactionPlaceProps) => {
    const { className } = props

    const {
        register,
        formState: { errors },
        clearErrors,
        watch,
        setValue,
    } = useFormContext<PlaceTypes>()

    const handleClearErrors = useCallback(() => {
        if (!Object.keys(errors).length) return
        clearErrors()
    }, [clearErrors, errors])

    return (
        <VStack
            max
            className={classNames(cls.transactionPlace, {}, [className])}
            onClick={handleClearErrors}
        >
            <Text title="Место сделки" size="l" className={cls.title} />
            <AdLayout
                left="Город"
                right={
                    <BlockAdRight
                        interaction={<CitySelect />}
                        errors={errors}
                        errorName="city"
                    />
                }
            />
        </VStack>
    )
})
TransactionPlace.displayName = 'TransactionPlace'
