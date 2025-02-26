import { memo, useCallback } from 'react'

import { useFormContext } from 'react-hook-form'

import { CitySelect } from '@/features/CitySelect'
import { AdLayout } from '@/shared/layouts/AdLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { BlockAdRight } from '@/shared/ui/BlockAdRight'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

import { PlaceTypes } from '../../model/schema/placeSchema'

interface TransactionPlaceProps {
    className?: string
}

export const TransactionPlace = memo((props: TransactionPlaceProps) => {
    const { className } = props

    const isMobile = useDevice()

    const {
        formState: { errors },
        clearErrors,
    } = useFormContext<PlaceTypes>()

    const handleClearErrors = useCallback(() => {
        if (!Object.keys(errors).length) return
        clearErrors()
    }, [clearErrors, errors])

    return (
        <VStack
            max
            className={classNames('', {}, [className])}
            onClick={handleClearErrors}
            gap="24"
        >
            <Text title="Место сделки" size="l" />
            {isMobile && <CitySelect />}
            {!isMobile && (
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
            )}
        </VStack>
    )
})
TransactionPlace.displayName = 'TransactionPlace'
