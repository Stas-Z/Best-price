import { memo, useEffect, useState } from 'react'

import { useFormContext } from 'react-hook-form'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'

import { saleType, SaleTypes } from '../../../model/consts/selectSaleType'
import { SelectSaleTypes } from '../../../model/schema/saleTypeSchema'
import { SaleTypeSelectProps } from '../SaleTypeSelect'

export const SaleTypeSelectDesktop = memo((props: SaleTypeSelectProps) => {
    const { className, isOpen } = props
    const [saleTypeState, setSaleTypeState] = useState<string>('')

    const { register, setValue } = useFormContext<SelectSaleTypes>()

    const handleSaleTypeSelect = (type: SaleTypes) => {
        console.log('type', type)
        setSaleTypeState(type)
        setValue('sale', type)
    }

    useEffect(() => {
        if (!isOpen) {
            setSaleTypeState('')
        }
    }, [isOpen])

    return (
        <HStack gap="8" className={classNames('', {}, [className])}>
            <Button
                variant="filled"
                onClick={() => handleSaleTypeSelect(saleType.FOR_SELF)}
                checked={saleTypeState === saleType.FOR_SELF}
                {...register('sale')}
            >
                Покупал для себя
            </Button>
            <Button
                variant="outline"
                onClick={() => handleSaleTypeSelect(saleType.FOR_SALE)}
                checked={saleTypeState === saleType.FOR_SALE}
                {...register('sale')}
            >
                Покупал для перепродажи
            </Button>
        </HStack>
    )
})
SaleTypeSelectDesktop.displayName = 'SaleTypeSelectDesktop'
